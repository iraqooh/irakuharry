// components/BlogPreview.tsx
import { blogPosts } from "@/lib/blog";
import BlogCard from "./BlogCard";
import Link from "next/link";

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Latest Writing</h2>
          <Link
            href="/blog"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
          >
            View all posts →
          </Link>
        </div>

        {latestPosts.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400 py-12">
            No posts yet. Check back soon!
          </p>
        ) : (
          <div className={latestPosts.length === 1 ? "w-full" : "grid md:grid-cols-3 gap-8"}>
            {latestPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}