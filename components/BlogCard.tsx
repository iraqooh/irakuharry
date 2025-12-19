import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { BlogPostPreview } from "@/lib/blog";
import { HOST } from "@/lib/hashnode";

type Props = {
  post: BlogPostPreview;
};

export default function BlogCard({ post }: Props) {
  const { frontmatter, slug } = post;

  return (
    <Link
      href={`https://${HOST}/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative h-48 bg-gray-200">
          {frontmatter.coverImage ? (
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-linear-to-br from-indigo-500 to-purple-600">
              <span className="text-white text-3xl font-bold">{frontmatter.title[0]}</span>
            </div>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition">
            {frontmatter.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 flex-1">
            {frontmatter.excerpt}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {frontmatter.readTime}
            </span>
          </div>

          {frontmatter.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}