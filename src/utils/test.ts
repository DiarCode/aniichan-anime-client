import { IAnime } from "../types/anime";
import { IEpisode } from "../types/episode";
import { IManga } from "../types/manga";
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

//Manga
const mangaEntity: IManga = {
  mal_id: 3,
  url: "https://myanimelist.net/manga/3/20th_Century_Boys",
  images: {
    jpg: {
      image_url: "https://cdn.myanimelist.net/images/manga/5/260006.jpg",
    },
  },
  title: "20th Century Boys",
  type: "Manga",
  published: {
    from: "1999-09-27T00:00:00+00:00",
    to: "2006-04-24T00:00:00+00:00",
  },
  chapters: 249,
  volumes: 22,
  status: "Finished",
  publishing: false,
  score: 8.95,
  scored_by: 69167,
  rank: 12,
  popularity: 29,
  members: 201020,
  favorites: 16104,
  synopsis:
    'As the 20th century approaches its end, people all over the world are anxious that the world is changing. And probably not for the better. Kenji Endo is a normal convenience store manager who\'s just trying to get by. But when he learns that one of his old friends going by the name "Donkey" has suddenly committed suicide, and that a new cult led by a figure known as "Friend" is becoming more notorious, Kenji starts to feel that something isn\'t right. With a few key clues left behind by his deceased friend, Kenji realizes that this cult is much more than he ever thought it would be—not only is this mysterious organization directly targeting him and his childhood friends, but the whole world also faces a grave danger that only the friends have the key to stop. Kenji\'s simple life of barely making ends meet is flipped upside down when he reunites with his childhood friends, and together they must figure out the truth of how their past is connected to the cult, as the turn of the century could mean the possible end of the world. [Written by MAL Rewrite]',
  background:
    "20th Century Boys won the Kodansha Manga Award in the general category in 2001, an Excellence Prize at the Japan Media Arts Festival in 2002, and the Shogakukan Manga Award in the general category in 2003. The series' combined storyline won the Grand Prize at the 37th Japan Cartoonist Awards on May 9, 2008. VIZ Media published the series in English under the VIZ Signature imprint from February 17, 2009 to September 18, 2012. VIZ Media licensed the series in 2005; however, at Urasawa's request, it was rescheduled for release after Monster finished its English publication due to a change in art style over time. The series has also been published in Brazilian Portuguese by Panini Comics/Planet Manga since September 2012. The series was adapted into a trilogy of live-action films which released in Japan between August 30, 2008 and August 29, 2009.",
  authors: [
    {
      mal_id: 1867,
      type: "people",
      name: "Urasawa, Naoki",
      url: "https://myanimelist.net/people/1867/Naoki_Urasawa",
    },
  ],
  genres: [
    {
      mal_id: 46,
      type: "Manga",
      name: "Award Winning",
      url: "https://myanimelist.net/manga/genre/46/Award_Winning",
    },
    {
      mal_id: 8,
      type: "Manga",
      name: "Drama",
      url: "https://myanimelist.net/manga/genre/8/Drama",
    },
  ],
};

export const mangaEntityArr = [
  mangaEntity,
  mangaEntity,
  mangaEntity,
  mangaEntity,
  mangaEntity,
  mangaEntity,
  mangaEntity,
  mangaEntity,
];
