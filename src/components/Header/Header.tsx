"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "../Button-Link/Link/Link";
import "./Header.css";
import { useState } from "react";
import { User } from "@/services/types";
import ProfileSideNav from "../ProfileSideNav/ProfileSideNav";

type Props = {
  nav?: { href: string; title: string }[];
  user?: User;
  className?: string;
};

const Header = ({ nav, user, className }: Props) => {
  return (
    <header className={`Header ${className} z-10 sticky bg-white top-0`}>
      <div className="flex justify-between items-center p-4">
        <NextLink href="/">
          <img
            src="/assets/logo.png"
            alt="logo"
            width="55"
            height="55"
            className="logo sm:w-20 sm:h-20"
          />
        </NextLink>
        {user !== undefined ? (
          <div className="user-profile relative cursor-pointer ">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-2 h-5 w-5 text-black"
            />
            {user.full_name}
            <div className="p-0 md:p-2">
              <ProfileSideNav className="absolute top-full right-0 hidden w-52 rounded shadow-md m-0" />
            </div>
          </div>
        ) : (
          <NextLink href="/login">
            <FontAwesomeIcon icon={faUser} className="mr-2 h-5 w-5" />
            Account
          </NextLink>
        )}
      </div>
      {nav !== undefined && (
        <nav className=" bg-black px-4 py-2 overflow-auto	">
          <ul className="flex justify-around">
            {nav.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    variant="text"
                    color="beige"
                    className="p-4 inline-block hover:bg-white hover:text-black"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
