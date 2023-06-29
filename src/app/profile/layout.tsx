"use client";
import Button from "@/components/Button-Link/Button/Button";
import Header from "@/components/Header/Header";
import {
  faHouse,
  faQuestion,
  faRightFromBracket,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentRoute = usePathname();

  const activeClasses = "bg-black text-white";

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
          <div className="flex flex-col m-2 p-1 border gap-2 w-4/12 h-2/6">
            <h1 className="text-lg font-bold">My account</h1>
            <Link
              href="/profile/settings"
              className={`p-1 ${
                currentRoute === "/profile/settings" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faHouse} className="pr-3" />
              Account Details
            </Link>
            <p className="p-1">
              <FontAwesomeIcon icon={faUser} className="pr-2" /> My Profile
            </p>
            <Link
              href="/profile/favorites"
              className={`p-1 ${
                currentRoute === "/profile/favorites" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faStar} className="pr-1" /> My favorites
            </Link>
            <Link
              href="/profile/help"
              className={` mb-2 p-1 ${
                currentRoute === "/profile/help" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faQuestion} className="pl-1" />
              <span className="pl-2"> Help </span>
            </Link>
            <Button variant="text" color="black" size="medium">
              <FontAwesomeIcon icon={faRightFromBracket} /> Log Out
            </Button>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
