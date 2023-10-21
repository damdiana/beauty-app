import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

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

const AUTH_COOKIE_NAME = "token";

const DAYS_30_SECONDS = 60 * 60 * 24 * 30;

let AUTH_COOKIE_CONFIG: Omit<ResponseCookie, "value"> = {
  name: AUTH_COOKIE_NAME,
  httpOnly: true,
  secure: true,
  maxAge: DAYS_30_SECONDS,
};

export {
  BASE_URL,
  HEADER_NAV,
  AUTH_COOKIE_NAME,
  DAYS_30_SECONDS,
  AUTH_COOKIE_CONFIG,
};
