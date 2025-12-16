export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  live?: string;
  github?: string;
};