import { HEADER_NAV } from "@/Constants";
import Header from "@/components/Header/Header";
import getUserServerSide from "@/services/server/UserService";
import { redirect } from "next/navigation";
import { JournalPage } from "./JournalPage";
import { getJournalEntriesByUser } from "@/model/JournalingModel";

const Journaling = async () => {
  const user = await getUserServerSide();

  if (user === undefined) {
    return redirect("/login");
  }

  const journalEntries = await getJournalEntriesByUser(user.id);
  return (
    <>
      <Header nav={HEADER_NAV} user={user} />
      <JournalPage initialJournalEntries={journalEntries} />
    </>
  );
};

export default Journaling;
