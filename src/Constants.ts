const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;

const CLIENT_URL = "";

const BASE_URL = typeof window === "undefined" ? SERVER_URL : CLIENT_URL;

const HEADER_NAV = [
  {
    href: "#",
    title: "Body",
  },
  {
    href: "#",
    title: "Face",
  },
  {
    href: "#",
    title: "New",
  },
  {
    href: "#",
    title: "Trending",
  },
];

export { BASE_URL, HEADER_NAV };
