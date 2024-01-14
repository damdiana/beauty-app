import { response200, response400, response401 } from "@/app/utils";
import { selectUserById, updateUserFullName } from "@/model/UserModel";
import getUserServerSide from "@/services/server/UserService";
import { parseJsonFromBody } from "@/services/utils";
import { z } from "zod";

const requestType = z.object({
  full_name: z.string().trim().min(1),
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
    await updateUserFullName(parsedBody.full_name, user.id);

    const newUser = await selectUserById(user.id);

    return response200({
      message: "Updated the user full name.",
      full_name: newUser?.full_name,
    });
  } catch (err) {
    console.error("error", err);
    return response400("Internal server error");
  }
}
