export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
};

export type Frontmatter = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
  coverImage?: string;
};

export type BlogPostPreview = {
  slug: string;
  frontmatter: Frontmatter;
};

export type BlogPost = BlogPostPreview & {
  Content: React.ComponentType;
};