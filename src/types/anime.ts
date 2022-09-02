import { IImages } from "./imageCollection";

export interface IAnime {
  mal_id: number;
  url: string;
  images: IImages;
  title: string;
  type: string;
  episodes: number;
  score: number;
  year: number;
  studios: IAnimeStudio[];
}

interface IAnimeStudio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
