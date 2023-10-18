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
          <div className="flex flex-col m-2 p-1 border gap-2 w-3/12 h-min">
            <h1 className="text-lg font-bold">My account</h1>
            <Link
              href="/profile/settings"
              className={`p-1 ${
                currentRoute === "/profile/settings" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faHouse} className="mr-3 h-5 w-5" />
              Account Details
            </Link>
            <Link
              href="/profile"
              className={`p-1 ${
                currentRoute === "/profile" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faUser} className="mr-3 h-5 w-5" /> My
              Profile
            </Link>
            <Link
              href="/profile/editprofile"
              className={`p-1 ${
                currentRoute === "/profile/editprofile" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faUser} className="mr-3 h-5 w-5" /> Edit
              Profile
            </Link>
            <Link
              href="/profile/favorites"
              className={`p-1 ${
                currentRoute === "/profile/favorites" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faStar} className="mr-3 h-5 w-5" /> My
              favorites
            </Link>
            <Link
              href="/profile/help"
              className={` mb-2 p-1 ${
                currentRoute === "/profile/help" ? activeClasses : ""
              }`}
            >
              <FontAwesomeIcon icon={faQuestion} className="ml-3 h-5 w-5" />
              <span className="pl-2"> Help </span>
            </Link>
            <Button variant="text" color="black" size="medium">
              <FontAwesomeIcon icon={faRightFromBracket} className="h-5 w-5" />
              Log Out
            </Button>
          </div>
          <div className="w-full">{children}</div>
        </div>
      </main>
    </>
  );
}
