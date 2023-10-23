"use client";
import Header from "@/components/Header/Header";
import ProfileSideNav from "@/components/ProfileSideNav/ProfileSideNav";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
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
