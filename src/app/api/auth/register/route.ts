import { NextResponse } from "next/server";
import validator from "email-validator";
import bcrypt from "bcrypt";
import {
  insertUser,
  sanitizeUser,
  selectUser,
  userAlreadyExists,
} from "@/model/UserModel";

const SALT_ROUNDS = +(process.env.SALT_ROUNDS ?? "5");

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    return NextResponse.json(
      {
        message: "Body needs to be in JSON format",
      },
      {
        status: 400,
      }
    );
  }
  if (typeof body.email !== "string" || typeof body.password !== "string") {
    return NextResponse.json(
      {
        message: "Email or password are not correct",
      },
      {
        status: 400,
      }
    );
  }

  if (!validator.validate(body.email)) {
    return NextResponse.json(
      {
        message: "Email structure is incorrect",
      },
      {
        status: 400,
      }
    );
  }

  try {
    let isAlreadyRegistered = await userAlreadyExists(body.email);
    if (isAlreadyRegistered) {
      return NextResponse.json(
        {
          message: "User already registered with this email.",
        },
        {
          status: 409,
        }
      );
    }

    const hash = bcrypt.hashSync(body.password, SALT_ROUNDS);
    await insertUser(body.email, hash);
    let user = await selectUser(body.email);
    if (user !== undefined) {
      return NextResponse.json(sanitizeUser(user));
    }
  } catch (err) {
    return NextResponse.json(
      {
        message: "Unable to register.",
      },
      {
        status: 500,
      }
    );
  }
}
