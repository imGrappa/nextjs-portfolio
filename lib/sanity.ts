import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-21";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // if you want to enable draft mode, set this to false
  perspective: "published",
});

export const urlFor = (source: any) => {
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${source}`;
}; 