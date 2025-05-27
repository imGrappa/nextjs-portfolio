import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { capitalizeFirstLetter } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import components from "@/lib/PortableTextComponents";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
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

const options = { next: { revalidate: 60 } };

export default async function PostsPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <>
      <h3 className="text-xl font-bold mb-6 mt-3">Posts</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div key={post._id}>
            <Link href={`/posts/${post.slug.current}`}>
              <img
                className="rounded-xl h-36 w-full block"
                src={post.imageUrl}
                alt={post.imageAlt || post.title}
                width={1280}
                height={720}
                loading="lazy"
              />
              <h3 className="text-lg mt-2 text-center">
                {capitalizeFirstLetter(post.title)}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
