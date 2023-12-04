import { HEADER_NAV } from "@/Constants";
import Header from "@/components/Header/Header";
import getUserServerSide from "@/services/server/UserService";
import { redirect } from "next/navigation";
import { JournalPage } from "./JournalPage";

const Journaling = async () => {
  const user = await getUserServerSide();

  if (user === undefined) {
    return redirect("/login");
  }

  return (
    <>
      <Header nav={HEADER_NAV} user={user} />
      <JournalPage />
    </>
  );
};

export default Journaling;
