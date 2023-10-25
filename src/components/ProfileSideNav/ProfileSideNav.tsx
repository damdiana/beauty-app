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

const ProfileSideNav = () => {
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
      } else {
        setFormError(resp.message);
      }
    } catch (err) {
      setFormError("Failed to logout");
    }
  };

  return (
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
        className={`p-1 ${currentRoute === "/profile" ? activeClasses : ""}`}
      >
        <FontAwesomeIcon icon={faUser} className="mr-3 h-5 w-5" /> My Profile
      </Link>
      <Link
        href="/profile/editprofile"
        className={`p-1 ${
          currentRoute === "/profile/editprofile" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faUser} className="mr-3 h-5 w-5" /> Edit Profile
      </Link>
      <Link
        href="/profile/favorites"
        className={`p-1 ${
          currentRoute === "/profile/favorites" ? activeClasses : ""
        }`}
      >
        <FontAwesomeIcon icon={faStar} className="mr-3 h-5 w-5" /> My favorites
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
      <Button variant="text" color="black" size="medium" onClick={logout}>
        <FontAwesomeIcon icon={faRightFromBracket} className="h-5 w-5" />
      </Button>
      {formError !== "" && (
        <p className="text-red-500 font-bold"> {formError} </p>
      )}
    </div>
  );
};

export default ProfileSideNav;
