import { NextResponse } from "next/server";
import validator from "email-validator";
import bcrypt from "bcrypt";
import {
  insertUser,
  sanitizeUser,
  selectUser,
  userAlreadyExists,
} from "@/model/UserModel";
import { response400, response409, response500 } from "@/app/utils";
import { z } from "zod";

const SALT_ROUNDS = +(process.env.SALT_ROUNDS ?? "5");
const requestType = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return response400("Body needs to be in JSON format");
  }
  const results = requestType.safeParse(body);
  if (!results.success) {
    return response400("Email or password are not correct");
  }
  const parsedBody = results.data;

  if (!validator.validate(parsedBody.email)) {
    return response400("Email structure is incorrect");
  }

  try {
    let isAlreadyRegistered = await userAlreadyExists(parsedBody.email);
    if (isAlreadyRegistered) {
      return response409("User already registered with this email.");
    }

    const hash = bcrypt.hashSync(parsedBody.password, SALT_ROUNDS);
    await insertUser(parsedBody.email, hash);
    let user = await selectUser(parsedBody.email);
    if (user !== undefined) {
      return NextResponse.json(sanitizeUser(user));
    }
  } catch (err) {
    return response500("Unable to register.");
  }
}
