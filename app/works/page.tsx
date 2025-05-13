import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { capitalizeFirstLetter } from "@/lib/utils";

export const revalidate = 60;

const query = `*[_type == "work" && defined(slug.current)] | order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  description,
  "imageUrl": mainImage.asset->url
}`;

export default async function WorksPage() {
  const works = await client.fetch(query);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Works</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {works.map((work: any) => (
          <Link
            className="group hover-transform block text-center"
            key={work._id}
            href={`/works/${work.slug.current}`}
          >
            <div className="block w-auto h-32 rounded-xl overflow-hidden relative">
              {work.imageUrl && (
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  loading="lazy"
                  className="object-cover w-full block transition-all duration-[5s] transform-y-custom"
                />
              )}
            </div>
            <h3 className="text-lg mt-2 text-center">
              {capitalizeFirstLetter(work.title)}
            </h3>
            <p className="text-sm text-muted-foreground">{work.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
