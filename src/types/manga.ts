import { IAuthor } from "./author";
import { IGenre } from "./genre";
import { IImages } from "./imageCollection";

export interface IManga {
  mal_id: number;
  url: string;
  images: IImages;
  title: string;
  type: string;
  published: {
    from: string;
    to: string;
  };
  chapters: number;
  volumes: number;
  status: string;
  publishing: boolean;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: IAuthor[];
  genres: IGenre[];
}
