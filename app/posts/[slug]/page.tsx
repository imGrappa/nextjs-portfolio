import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import components from "@/lib/PortableTextComponents";
import type { Metadata } from "next";

// Type tanımları
interface Post {
  _id: string;
  title: string;
  publishedAt: string;
  body: any[];
  imageUrl?: string;
  imageAlt?: string;
}

type PageParams = {
  params: Promise<{ slug: string }>;
};

// generateStaticParams için düzeltilmiş tip
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs.map((slugObj) => ({
    slug: slugObj.slug,
  }));
}

// Metadata oluşturma
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const resolvedParams = await params;
  const query = `*[_type == "post" && slug.current == $slug][0]{ title }`;
  const post = await client.fetch<{ title: string }>(query, {
    slug: resolvedParams.slug,
  });

  return {
    title: post?.title || "Post Not Found",
  };
}

// Post sayfası bileşeni
export default async function PostDetail({ params }: PageParams) {
  const resolvedParams = await params;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    body[] {
      ...,
      _type == "image" => {
        ...,
        asset->{
          _id,
          url
        }
      }
    },
    "imageUrl": mainImage.asset->url,
    "imageAlt": mainImage.alt
  }`;

  const post = await client.fetch<Post | null>(query, { slug: resolvedParams.slug });

  if (!post) return notFound();

  return (
    <>
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/posts">Posts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-bold">
                {post.title}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <p className="text-muted-foreground text-xs">
          {new Date(post.publishedAt).toLocaleDateString()}
        </p>
      </div>
      <div className="mt-4 post-body">
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.imageAlt || post.title}
            width={1280}
            height={720}
            priority={false}
            className="rounded-xl mb-6"
          />
        )}
        <PortableText value={post.body} components={components} />
      </div>
    </>
  );
}
