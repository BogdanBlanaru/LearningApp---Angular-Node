export interface Article {
  items: ArticleItems[];
  feed?: any;
  status: string;
}

export interface ArticleItems {
  author: string;
  categories: string[];
  content: string;
  description: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  title: string;
}
