export interface NewsData {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}
export interface GetNewsResponseAPI {
  status: string;
  totalResults: number;
  articles: NewsData[];
}
