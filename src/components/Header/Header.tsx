"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faXmark } from "@fortawesome/free-solid-svg-icons";
import Link from "../Button-Link/Link/Link";
import "./Header.css";
import { useState } from "react";
import Button from "../Button-Link/Button/Button";
import { User } from "@/services/types";

type Props = {
  nav?: { href: string; title: string }[];
  user?: User;
};

const Header = ({ nav, user }: Props) => {
  const [showNav, setShowNav] = useState(false);

  const displayNav = () => {
    setShowNav(!showNav);
  };
  return (
    <header className="Header sticky bg-white top-0">
      <div className="flex justify-between items-center p-4">
        <Button
          variant="text"
          color="black"
          onClick={displayNav}
          type="button"
          size="small"
          className="menuButton"
        >
          <FontAwesomeIcon
            icon={showNav ? faXmark : faBars}
            className="h-5 w-5"
          />
        </Button>
        <NextLink href="/">
          <img src="/assets/logo.png" alt="logo" width="80" className="logo" />
        </NextLink>
        {user !== undefined ? (
          <NextLink href="/profile">
            <FontAwesomeIcon icon={faUser} className="mr-2 h-5 w-5" />
            {user.fullName}
          </NextLink>
        ) : (
          <NextLink href="/login">
            <FontAwesomeIcon icon={faUser} className="mr-2 h-5 w-5" />
            Account
          </NextLink>
        )}
      </div>
      {nav !== undefined && (
        <nav className={` bg-black px-4 py-2 ${showNav ? "nav--open" : ""}`}>
          <ul
            className={`${
              showNav ? "flex-col" : "flex-row "
            }  flex justify-around`}
          >
            {nav.map((item) => {
              return (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    variant="text"
                    color="beige"
                    className="p-4"
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
