export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}