import { BASE_URL } from "@/Constants";
import { User, UserProfile } from "./types";

async function updateUserDetails(userForm: UserProfile): Promise<
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
    const resp = await fetch(`${BASE_URL}/api/user`, {
      method: "POST",
      body: JSON.stringify(userForm),
    });
    if (resp.ok) {
      const jsonResp = await resp.json();
      return {
        ok: true,
        userDetails: jsonResp.user,
      };
    }
    const jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  } catch (err) {
    return {
      ok: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

async function updateUserFullName(full_name: string): Promise<
  | {
      ok: true;
      userFullName: string;
    }
  | {
      ok: false;
      message: string;
    }
> {
  try {
    const resp = await fetch(`${BASE_URL}/api/user/full-name`, {
      method: "POST",
      body: JSON.stringify({ full_name }),
    });
    if (resp.ok) {
      const jsonResp = await resp.json();
      return {
        ok: true,
        userFullName: jsonResp.full_name,
      };
    }
    const jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  } catch (err) {
    return {
      ok: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

async function updateUserEmail(
  email: string,
  password: string
): Promise<
  | {
      ok: true;
      userEmail: string;
    }
  | {
      ok: false;
      message: string;
    }
> {
  try {
    const resp = await fetch(`${BASE_URL}/api/user/email`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
    if (resp.ok) {
      const jsonResp = await resp.json();
      return {
        ok: true,
        userEmail: jsonResp.email,
      };
    }
    const jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  } catch (err) {
    return {
      ok: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export { updateUserDetails, updateUserFullName, updateUserEmail };
