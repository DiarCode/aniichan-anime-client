import { IAnime } from "../types/anime";
import { IEpisode } from "../types/episode";
import { INews } from "../types/news";

//Anime
const animeEntity: IAnime = {
  mal_id: 5114,
  url: "https://myanimelist.net/…l_Alchemist__Brotherhood",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    },
    webp: {
      image_url: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      large_image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
      small_image_url:
        "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
    },
  },

  title: "Fullmetal Alchemist: Brotherhood",
  type: "TV",
  episodes: 64,
  score: 9.13,
  year: 2009,
  studios: [
    {
      mal_id: 4,
      type: "anime",
      name: "Bones",
      url: "https://myanimelist.net/anime/producer/4/Bones",
    },
  ],
};

export const animeEntityArr = [
  animeEntity,
  animeEntity,
  animeEntity,
  animeEntity,
  animeEntity,
  animeEntity,
  animeEntity,
  animeEntity,
  animeEntity,
];

//News
const newsEntity: INews = {
  mal_id: 56156936,
  url: "https://myanimelist.net/news/56156936",
  title: "North American Anime & Manga Releases for November",
  date: "2018-11-05T14:27:00+00:00",
  author_username: "Sakana-san",
  author_url: "https://myanimelist.net/profile/Sakana-san",
  forum_url: "https://myanimelist.net/forum/?topicid=1749894",
  images: {
    jpg: {
      image_url:
        "https://cdn.myanimelist.net/s/common/uploaded_files/1541455779-8da9e27ca7b6d6d699bbaec5a537b143.jpeg?s=3ee323c78fd67a75e74f36026e032c33",
    },
  },
  comments: 7,
  excerpt:
    "Here are the North American anime & manga releases for November Week 1: November 6 - 12 Anime Releases Black Clover Part 2 Blu-ray & DVD Combo Galaxy Angel Z...",
};

export const newsEntityArr = [
  newsEntity,
  newsEntity,
  newsEntity,
  newsEntity,
  newsEntity,
  newsEntity,
];

//Episodes
const episodeEntity: IEpisode = {
  entry: {
    mal_id: 40839,
    url: "https://myanimelist.net/…0839/Kanojo_Okarishimasu",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1485/107693.jpg",
      },
    },
    title: "Kanojo, Okarishimasu",
  },
  episodes: [
    {
      mal_id: 12,
      url: "https://myanimelist.net/anime/40839/Kanojo_Okarishimasu/episode/12",
      title: "Episode 12",
    },
    {
      mal_id: 11,
      url: "https://myanimelist.net/anime/40839/Kanojo_Okarishimasu/episode/11",
      title: "Episode 11",
    },
  ],
};

export const episodesEntityArr = [
  episodeEntity,
  episodeEntity,
  episodeEntity,
  episodeEntity,
  episodeEntity,
  episodeEntity,
  episodeEntity,
  episodeEntity,
  episodeEntity,
];

//Forum
const forumEntity1 = {
  mal_id: 243721,
  url: "https://myanimelist.net/forum/?topicid=243721",
  title: "Fullmetal Alchemist: Brotherhood Episode 64 Discussion",
  date: "2010-07-04T00:00:00+00:00",
  author_username: "Ahenshihael",
  author_url: "https://myanimelist.net/profile/Ahenshihael",
  comments: 842,
};

const forumEntity2 = {
  mal_id: 23,
  url: "https://myanimelist.net/forum/?topicid=243721",
  title: "Fullmetal Alchemist",
  date: "2010-07-04T00:00:00+00:00",
  author_username: "Am",
  author_url: "https://myanimelist.net/profile/Ahenshihael",
  comments: 12,
};

export const forumEntityArr = [
  forumEntity1,
  forumEntity2,
  forumEntity1,
  forumEntity2,
  forumEntity2,
  forumEntity2,
  forumEntity1,
  forumEntity2,
];
