import { BASE_URL } from "@/Constants";
import { User, UserProfile } from "./types";

async function postUserDetails(userForm: UserProfile): Promise<
  | {
      ok: true;
      userDetails: UserProfile;
    }
  | {
      ok: false;
      message: string;
    }
> {
  try {
    let resp = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userForm),
    });
    if (resp.ok) {
      let jsonResp = await resp.json();
      return {
        ok: true,
        userDetails: jsonResp.user,
      };
    } else {
      let jsonResp = await resp.json();
      return {
        ok: false,
        message: jsonResp.message ?? "Something went wrong. Please try again.",
      };
    }
  } catch (err) {
    return {
      ok: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export default postUserDetails;
