import { IImages } from "./imageCollection";

export interface INews {
  mal_id: number;
  url: string;
  title: string;
  date: string;
  author_username: string;
  author_url: string;
  forum_url: string;
  images: IImages;
  comments: number;
  excerpt: string;
}
