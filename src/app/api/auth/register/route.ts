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

const SALT_ROUNDS = +(process.env.SALT_ROUNDS ?? "5");

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return response400("Body needs to be in JSON format");
  }
  if (typeof body.email !== "string" || typeof body.password !== "string") {
    return response400("Email or password are not correct");
  }

  if (!validator.validate(body.email)) {
    return response400("Email structure is incorrect");
  }

  try {
    let isAlreadyRegistered = await userAlreadyExists(body.email);
    if (isAlreadyRegistered) {
      return response409("User already registered with this email.");
    }

    const hash = bcrypt.hashSync(body.password, SALT_ROUNDS);
    await insertUser(body.email, hash);
    let user = await selectUser(body.email);
    if (user !== undefined) {
      return NextResponse.json(sanitizeUser(user));
    }
  } catch (err) {
    return response500("Unable to register.");
  }
}
