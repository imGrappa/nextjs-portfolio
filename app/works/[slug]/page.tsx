import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { client } from "../../../sanity-studio/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import components from "@/lib/PortableTextComponents";

type PageParams = {
  params: Promise<{ slug: string }>;
};

// generateStaticParams için düzeltilmiş tip
export async function generateStaticParams() {
  const query = `*[_type == "work"]{ "slug": slug.current }`;
  const slugs = await client.fetch<{ slug: string }[]>(query);
  return slugs.map((slugObj) => ({
    slug: slugObj.slug,
  }));
}

export default async function WorkDetail({ params }: PageParams) {
  const resolvedParams = await params;
  const query = `*[_type == "work" && slug.current == $slug][0]{
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

  const work = await client.fetch(query, { slug: resolvedParams.slug });

  if (!work) return notFound();

  return (
    <>
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/works">Works</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-xl font-bold">
              {work.title}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="work-body">
        <div className="mb-4 text-justify">
          <PortableText value={work.body} components={components} />
        </div>
        {work.imageUrl && (
          <Image
            src={work.imageUrl}
            alt={work.title}
            width={1280}
            height={720}
            priority={false}
            className="rounded-xl mb-6 w-full"
          />
        )}
      </div>
    </>
  );
}
