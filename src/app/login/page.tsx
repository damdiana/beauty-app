import getUserServerSide from "@/services/server/UserService";
import Link from "../../components/Button-Link/Link/Link";
import Header from "../../components/Header/Header";
import Login from "../../components/auth/Login";
import "./login.css";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUserServerSide();

  if (user !== undefined) {
    return redirect("/");
  }
  return (
    <>
      <Header />
      <main className="flex items-center">
        <Login />
        <div className="bg-slate-500 w-px divider m-0 p-0" />
        <div className="flex flex-col items-center text-center p-2 mx-2 w-2/4">
          <p className="m-2 font-bold">You don't have an account? </p>
          <p className="font-bold mb-4"> Let's change that </p>
          <Link
            href="/register"
            variant="full"
            color="black"
            className="mt-6 rounded-2xl w-full"
          >
            Register
          </Link>
        </div>
      </main>
    </>
  );
}
