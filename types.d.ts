interface IAnime {
  mal_id: number;
  url: string;
  images: IImages;
  title: string;
  type: string;
  episodes: number;
  score: number;
  year: number;
  studios: IStudio[];
}

interface IImages {
  jpg: IImage;
  webp: IImage;
}

interface IImage {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface IStudio {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
