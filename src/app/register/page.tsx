import getUserServerSide from "@/services/server/UserService";
import Header from "../../components/Header/Header";
import Register from "../../components/auth/Register";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getUserServerSide();

  if (user !== undefined) {
    return redirect("/");
  }
  return (
    <>
      <Header />
      <Register />
    </>
  );
}
