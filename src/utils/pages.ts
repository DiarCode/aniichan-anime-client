export const NAVBAR_PAGES_LINKS = [
  { name: "Home", element: "element", path: "/" },
  { name: "Search", element: "element", path: "/search" },
  { name: "Forum", element: "element", path: "/forum" },
  { name: "Reviews", element: "element", path: "/reviews" },
  { name: "News", element: "element", path: "/news" },
];

export const AUTHORIZATION_PAGES_LINKS = [
  { name: "Sign in", element: "element", path: "/login" },
  { name: "Sign up", element: "element", path: "/registration" },
];

export const ALL_PAGES = [...AUTHORIZATION_PAGES_LINKS, ...NAVBAR_PAGES_LINKS];
