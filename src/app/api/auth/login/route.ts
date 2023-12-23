import bcrypt from "bcrypt";
import { sanitizeUser, selectUser } from "@/model/UserModel";
import { response200, response400, response401 } from "@/app/utils";
import { z } from "zod";
import { cookies } from "next/headers";
import { encodeJWT } from "@/services/server/JWTService";
import { AUTH_COOKIE_CONFIG, DAYS_30_SECONDS } from "@/Constants";
import { parseJsonFromBody } from "@/services/utils";

const requestType = z.object({
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
    let user = await selectUser(parsedBody.email);
    if (user !== undefined) {
      let arePasswordsMatching = bcrypt.compareSync(
        parsedBody.password,
        user.password
      );
      if (arePasswordsMatching) {
        let jwt = await encodeJWT(user.id);
        cookiesStore.set({ ...AUTH_COOKIE_CONFIG, value: jwt });
        return response200(sanitizeUser(user));
      }
    }
    return response401("Email or password incorrect");
  } catch (err) {
    console.error("error", err);
    return response400("Internal server error");
  }
}
