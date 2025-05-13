import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

export default async function WorkDetail({
  params,
}: {
  params: { slug: string };
}) {
  const query = `*[_type == "work" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    body,
    "imageUrl": mainImage.asset->url
  }`;

  const work = await client.fetch(query, { slug: params.slug });

  if (!work) return notFound();

  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/works">Works</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{work.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      {work.imageUrl && (
        <img src={work.imageUrl} alt={work.title} className="rounded-xl mb-6" />
      )}
      <p className="text-sm text-muted-foreground mb-2">
        {new Date(work.publishedAt).toLocaleDateString()}
      </p>
      <PortableText value={work.body} />
    </>
  );
}
