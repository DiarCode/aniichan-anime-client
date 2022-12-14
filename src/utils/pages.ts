export const NAVBAR_PAGES_LINKS = {
  HOME: {
    name: "Home",
    description: "AniiChan - anime and manga encyclopedia",
    path: "/",
  },
  SEARCH: {
    name: "Search",
    description: "AniiChan - Find your favourite anime and manga",
    path: "/search",
  },
  FORUM: {
    name: "Forum",
    description: "AniiChan - discuss and explore anime and manga topics",
    path: "/forum",
  },
  MANGA: {
    name: "Manga",
    description: "AniiChan - pupular manga, news and much more",
    path: "/manga",
  },
  NEWS: {
    name: "News",
    description: "AniiChan - fresh news of the most popular anime and manga",
    path: "/news",
  },
};

export const AUTHORIZATION_PAGES_LINKS = {
  LOGIN: { name: "Sign in", element: "element", path: "/login" },
  REGISTRATION: { name: "Sign up", element: "element", path: "/registration" },
};

export const PROFILE_PAGES_LINKS = {
  PROFILE: { name: "Profile", element: "element", path: "/profile" },
  SAVED: { name: "Saved", element: "element", path: "/saved-anime" },
  LIKED: { name: "Liked", element: "element", path: "/liked-anime" },
  SETTINGS: { name: "Settings", element: "element", path: "/settings" },
};

export const EXCERPT_PAGES_LINKS = {
  ANIME: { name: "Anime", element: "element", path: "/anime" },
};

export const PAGES_LINKS = {
  ...NAVBAR_PAGES_LINKS,
  ...AUTHORIZATION_PAGES_LINKS,
  ...PROFILE_PAGES_LINKS,
  ...EXCERPT_PAGES_LINKS,
};
