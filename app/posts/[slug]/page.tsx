import { client } from "../../../sanity-studio/sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import components from "@/lib/PortableTextComponents";

export default async function PostDetail({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  publishedAt,
  body[]{
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

  const post = await client.fetch(query, { slug: params.slug });

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
          <img
            src={post.imageUrl}
            alt={post.imageAlt || post.title}
            width={1280}
            height={720}
            loading="lazy"
            className="rounded-xl mb-6"
          />
        )}
        <PortableText value={post.body} components={components} />
      </div>
    </>
  );
}
