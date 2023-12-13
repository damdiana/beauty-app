import bcrypt from "bcrypt";
import { response200, response400, response401 } from "@/app/utils";
import { selectUserById, updateUserEmail } from "@/model/UserModel";
import { z } from "zod";
import getUserServerSide from "@/services/server/UserService";
import { parseJsonFromBody } from "@/services/utils";

const requestType = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function POST(request: Request) {
  const user = await getUserServerSide();
  if (user === undefined) {
    return response401("User not logged in");
  }

  const jsonResult = await parseJsonFromBody(request);
  if (jsonResult.ok === false) {
    return response400(jsonResult.message);
  }
  const results = requestType.safeParse(jsonResult.data);
  if (!results.success) {
    console.error(results.error);
    return response400("Body doesn't match the required type");
  }
  const parsedBody = results.data;

  try {
    let arePasswordsMatching = bcrypt.compareSync(
      parsedBody.password,
      user.password
    );
    if (arePasswordsMatching) {
      await updateUserEmail(parsedBody.email, user.id);
      const newUser = await selectUserById(user.id);

      return response200({
        message: "Updated the user email.",
        email: newUser?.email,
      });
    }
    return response401("Password incorrect");
  } catch (err) {
    console.error("error", err);
    return response400("Internal server error");
  }
}
