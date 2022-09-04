import { IImages } from "./imageCollection";

export interface IEpisode {
  entry: IEpisodeEntry;
  episodes: IEpisodeInfo[];
}

export interface IEpisodeEntry {
  mal_id: number;
  url: string;
  images: IImages;
  title: string;
}

export interface IEpisodeInfo {
  mal_id: number;
  url: string;
  title: string;
}
