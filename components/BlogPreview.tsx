import Link from "next/link";
import BlogCard from "./BlogCard";
import { getLatestHashnodePosts, HOST } from "@/lib/hashnode";

export default async function BlogPreview() {
  const latestPosts = await getLatestHashnodePosts(3);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Latest Writing</h2>

          <Link
            href={`https://${HOST}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-lg"
          >
            View all posts →
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl w-32 h-32 mx-auto mb-8" />
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Blog posts coming soon...
            </p>
          </div>
        ) : (
          <div
            className={
              latestPosts.length === 1
                ? "flex justify-center"
                : latestPosts.length === 2
                ? "grid md:grid-cols-2 gap-8"
                : "grid md:grid-cols-3 gap-8"
            }
          >
            {latestPosts.map((post) => (
              <BlogCard
                key={post.slug}
                post={{
                  slug: post.slug,
                  frontmatter: {
                    title: post.title,
                    excerpt: post.brief,
                    date: post.publishedAt,
                    readTime: `${post.readTimeInMinutes} min read`,
                    coverImage: post.coverImage?.url,
                  },
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
