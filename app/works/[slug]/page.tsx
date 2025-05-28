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
import components from "@/lib/PortableTextComponents";

export default async function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
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

  const work = await client.fetch(query, { slug: params.slug });

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
          <img
            src={work.imageUrl}
            alt={work.title}
            className="rounded-xl mb-6 w-full"
          />
        )}
      </div>
    </>
  );
}
