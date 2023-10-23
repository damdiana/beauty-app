import { response200, response400 } from "@/app/utils";
import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME } from "@/Constants";

export async function POST(request: Request) {
  let cookiesStore = cookies();
  cookiesStore.delete(AUTH_COOKIE_NAME);
  return response200({
    message: "ok",
  });
}
