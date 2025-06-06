import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // set false if using draft mode
  perspective: "published",
});

export const urlFor = (source: any) => {
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${source}`;
};
