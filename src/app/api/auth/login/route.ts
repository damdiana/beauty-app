import validator from "email-validator";
import bcrypt from "bcrypt";
import { sanitizeUser, selectUser } from "@/model/UserModel";
import { response200, response400, response401 } from "@/app/utils";
import { z } from "zod";

const requestType = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  let body = undefined;
  try {
    body = await request.json();
  } catch (err) {
    console.error(err);
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
    let user = await selectUser(parsedBody.email);
    if (user !== undefined) {
      let arePasswordsMatching = bcrypt.compareSync(
        parsedBody.password,
        user.password
      );
      if (arePasswordsMatching) {
        response200(sanitizeUser(user));
      }
    }
    return response401("Email or password incorrect");
  } catch (err) {
    console.error("error", err);
    return response400("Internal server error");
  }
}
