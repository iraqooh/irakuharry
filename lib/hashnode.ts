export type HashnodePost = {
  slug: string;
  title: string;
  brief: string;
  publishedAt: string;
  readTimeInMinutes: number;
  coverImage?: {
    url: string;
  };
};

const HASHNODE_API_URL = "https://gql.hashnode.com/";
export const HOST = "harryiraku.hashnode.dev";

export async function getLatestHashnodePosts(limit = 3): Promise<HashnodePost[]> {
  const query = `
    query GetPosts {
      publication(host: "${HOST}") {
        posts(first: ${limit}) {
          edges {
            node {
              slug
              title
              brief
              publishedAt
              readTimeInMinutes
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch(HASHNODE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 }, // cache for 1 hour
  });

  const json = await res.json();

  return json.data.publication.posts.edges.map(
    (edge: any) => edge.node
  );
}
