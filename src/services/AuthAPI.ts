import { BASE_URL } from "@/Constants";

async function loginUser(
  email: string,
  password: string
): Promise<
  | {
      ok: true;
      email: string;
    }
  | {
      ok: false;
      message: string;
    }
> {
  let resp = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (resp.ok) {
    let jsonResp = await resp.json();
    return {
      ok: true,
      email: jsonResp.email,
    };
  } else {
    let jsonResp = await resp.json();
    return {
      ok: false,
      message: jsonResp.message ?? "Something went wrong. Please try again.",
    };
  }
}

async function logoutUser(): Promise<{
  ok: boolean;
  message: string;
}> {
  let resp = await fetch(`${BASE_URL}/api/auth/logout`, {
    method: "POST",
  });
  if (resp.ok) {
    let jsonResp = await resp.json();
    return {
      ok: true,
      message: jsonResp.message,
    };
  } else {
    return {
      ok: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
export { loginUser, logoutUser };
