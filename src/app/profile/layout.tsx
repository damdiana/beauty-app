import { HEADER_NAV } from "@/Constants";
import Header from "@/components/Header/Header";
import ProfileSideNav from "@/components/ProfileSideNav/ProfileSideNav";
import getUserServerSide from "@/services/server/UserService";
import { redirect } from "next/navigation";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserServerSide();

  if (user === undefined) {
    return redirect("/login");
  }
  return (
    <>
      <Header nav={HEADER_NAV} user={user} />
      <main className="h-screen">
        <div className="flex mt-4 w-full h-full">
          <ProfileSideNav />
          <div className="w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
