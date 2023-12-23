import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import {
  insertUser,
  sanitizeUser,
  selectUser,
  userAlreadyExists,
} from "@/model/UserModel";
import { response400, response409, response500 } from "@/app/utils";
import { z } from "zod";
import { encodeJWT } from "@/services/server/JWTService";
import { AUTH_COOKIE_CONFIG } from "@/Constants";
import { cookies } from "next/headers";
import { parseJsonFromBody } from "@/services/utils";

const SALT_ROUNDS = +(process.env.SALT_ROUNDS ?? "5");
const requestType = z.object({
  full_name: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  let cookiesStore = cookies();
  const jsonResult = await parseJsonFromBody(request);
  if (jsonResult.ok === false) {
    return response400(jsonResult.message);
  }
  const results = requestType.safeParse(jsonResult.data);
  if (!results.success) {
    return response400("Body needs to be in JSON format");
  }
  const parsedBody = results.data;

  try {
    let isAlreadyRegistered = await userAlreadyExists(parsedBody.email);
    if (isAlreadyRegistered) {
      return response409("User already registered with this email.");
    }

    const hash = bcrypt.hashSync(parsedBody.password, SALT_ROUNDS);
    await insertUser(parsedBody.email, hash, parsedBody.full_name);
    let user = await selectUser(parsedBody.email);
    if (user !== undefined) {
      let jwt = await encodeJWT(user.id);
      cookiesStore.set({ ...AUTH_COOKIE_CONFIG, value: jwt });
      return NextResponse.json(sanitizeUser(user));
    }
  } catch (err) {
    return response500("Unable to register.");
  }
}
