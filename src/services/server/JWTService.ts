import * as jose from "jose";
import { z } from "zod";

const jwtType = z.object({
  userID: z.number(),
});

const KEY = process.env.JWT_KEY;
const ALG = "HS256";
const secret = new TextEncoder().encode(KEY);

async function encodeJWT(userID: number): Promise<string> {
  const jwt = await new jose.SignJWT({ userID })
    .setProtectedHeader({ alg: ALG })
    .sign(secret);

  return jwt;
}

async function decodeJWT(token: string): Promise<number | undefined> {
  try {
    const parseData = await jose.jwtVerify(token, secret);
    const result = jwtType.safeParse(parseData);
    if (result.success) {
      return result.data.userID;
    }
    return undefined;
  } catch (err) {
    console.error("Failed to verify JWT", err);
    return undefined;
  }
}

export { encodeJWT, decodeJWT };
