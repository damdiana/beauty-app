import { response200, response400, response401 } from "@/app/utils";
import { selectUserById, updateUser } from "@/model/UserModel";
import getUserServerSide from "@/services/server/UserService";
import { ZodUserProfile } from "@/services/types";
import { parseJsonFromBody } from "@/services/utils";

export async function POST(request: Request) {
  const user = await getUserServerSide();
  if (user === undefined) {
    return response401("User not logged in");
  }
  const jsonResult = await parseJsonFromBody(request);
  if (jsonResult.ok === false) {
    return response400(jsonResult.message);
  }
  const results = ZodUserProfile.safeParse(jsonResult.data);
  if (!results.success) {
    console.error(results.error);
    return response400("Body doesn't match the required type");
  }
  const parsedBody = results.data;

  try {
    await updateUser(user.id, parsedBody);
    const newUser = await selectUserById(user.id);
    return response200({
      message: "Updated the user details.",
      user: newUser,
    });
  } catch (err) {
    console.error("error", err);
    return response400("Internal server error");
  }
}
