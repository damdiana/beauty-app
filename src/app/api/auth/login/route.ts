import { NextResponse } from "next/server";
import validator from "email-validator";
import bcrypt from "bcrypt";
import { sanitizeUser, selectUser } from "@/model/UserModel";

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    console.error(err);
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
    let user = await selectUser(body.email);
    if (user !== undefined) {
      let arePasswordsMatching = bcrypt.compareSync(
        body.password,
        user.password
      );
      if (arePasswordsMatching) {
        return NextResponse.json(sanitizeUser(user), {
          status: 200,
        });
      }
    }
    return NextResponse.json(
      {
        message: "Email or password incorrect",
      },
      {
        status: 401,
      }
    );
  } catch (err) {
    console.error("error", err);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      {
        status: 400,
      }
    );
  }
}
