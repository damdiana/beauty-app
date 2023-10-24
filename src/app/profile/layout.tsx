import Header from "@/components/Header/Header";
import ProfileSideNav from "@/components/ProfileSideNav/ProfileSideNav";
import getUserServerSide from "@/services/server/UserService";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserServerSide();

  return (
    <>
      <Header
        user={user}
        nav={[
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Body",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Face",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "New",
          },
          {
            href: "https://github.com/damdiana?tab=repositories",
            title: "Trending",
          },
        ]}
      />
      <main className="h-screen">
        <div className="flex mt-4 w-full h-full">
          <ProfileSideNav />
          <div className="w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
