import { AUTH_COOKIE_NAME } from "@/Constants";
import { cookies } from "next/headers";
import { User } from "../types";
import { decodeJWT } from "./JWTService";
import { selectUserById } from "@/model/UserModel";

async function getUserServerSide(): Promise<User | undefined> {
  try {
    const cookiesStore = cookies();
    const jwtCookie = cookiesStore.get(AUTH_COOKIE_NAME);

    if (jwtCookie === undefined) {
      return undefined;
    }

    const userId = await decodeJWT(jwtCookie.value);
    if (userId === undefined) {
      return undefined;
    }
    const user = await selectUserById(userId);
    return user as User;
  } catch (err) {
    console.error("Failed to identify user", err);
    return undefined;
  }
}

export default getUserServerSide;
