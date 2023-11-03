"use client";
import {
  faHouse,
  faQuestion,
  faRightFromBracket,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "../Button-Link/Button/Button";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { logoutUser } from "@/services/AuthAPI";

type Props = {
  className?: string;
};

const ProfileSideNav = ({ className }: Props) => {
  const [formError, setFormError] = useState("");
  const currentRoute = usePathname();

  const activeClasses = "bg-black text-white";
  const router = useRouter();

  const logout = async () => {
    setFormError("");
    try {
      let resp = await logoutUser();
      if (resp.ok === true) {
        router.replace("/");
        //  Refresh the router to clear user data on logout.
        // Without this, the name of the user (right side up) remains for a few seconds,
        //  even after the logout.
        router.refresh();
      } else {
        setFormError(resp.message);
      }
    } catch (err) {
      setFormError("Failed to logout");
    }
  };

  let commonClassNames =
    "no-underline block p-2.5 hover:bg-black hover:text-white";

  return (
    <div
      className={`${className} flex-col p-1 border gap-2 h-min hidden bg-white ProfileSideNav`}
    >
      <h1 className="text-lg font-bold m-0 p-2.5">My account</h1>
      <Link
        href="/profile/settings"
        className={`${commonClassNames} ${
          currentRoute === "/profile/settings" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faHouse} className="mr-3 h-5 w-5" />
        Account Details
      </Link>
      <Link
        href="/profile"
        className={`${commonClassNames} ${
          currentRoute === "/profile" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faUser} className="mr-3 h-5 w-5" /> My Profile
      </Link>
      <Link
        href="/profile/editprofile"
        className={`${commonClassNames} ${
          currentRoute === "/profile/editprofile" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faUser} className="mr-3 h-5 w-5" /> Edit Profile
      </Link>
      <Link
        href="/profile/favorites"
        className={`${commonClassNames} ${
          currentRoute === "/profile/favorites" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faStar} className="mr-3 h-5 w-5" /> My favorites
      </Link>
      <Link
        href="/profile/help"
        className={` mb-2 ${commonClassNames} ${
          currentRoute === "/profile/help" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faQuestion} className="mr-3 h-5 w-5" />
        <span className="pl-2"> Help </span>
      </Link>
      <Button
        variant="text"
        color="black"
        size="medium"
        onClick={logout}
        className=" hover:bg-black hover:text-white"
      >
        <FontAwesomeIcon icon={faRightFromBracket} className="h-5 w-5" />
      </Button>
      {formError !== "" && (
        <p className="text-red-500 font-bold"> {formError} </p>
      )}
    </div>
  );
};

export default ProfileSideNav;
