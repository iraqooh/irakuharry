import { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getLatestHashnodePosts, HOST } from "@/lib/hashnode";

export const metadata: Metadata = {
  title: "Blog | Iraku Harry",
  description:
    "Thoughts on web development, Next.js, TypeScript, Appwrite, and building modern apps.",
};

export default async function BlogPage() {
  const posts = await getLatestHashnodePosts(50);

  return (
    <section className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl pb-1 md:text-6xl font-bold mb-6 bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Blogs
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I write about modern web development, tools I love, and lessons from building real projects.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 text-lg">
            No posts yet. Coming soon!
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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

        <div className="text-center mt-20">
          <Link
            href={`https://${HOST}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-indigo-600 dark:text-indigo-400 hover:underline font-medium text-lg"
          >
            Read all articles on Hashnode →
          </Link>
        </div>
      </div>
    </section>
  );
}
