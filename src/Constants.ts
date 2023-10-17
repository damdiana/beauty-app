const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;

const CLIENT_URL = "";

const BASE_URL = typeof window === "undefined" ? SERVER_URL : CLIENT_URL;

export { BASE_URL };
