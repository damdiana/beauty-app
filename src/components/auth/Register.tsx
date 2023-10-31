"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import { faFileText, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { registerUser } from "@/services/AuthAPI";
import { useRouter } from "next/navigation";

const Register = () => {
  const [wizard, setWizard] = useState<
    | {
        type: "initial";
      }
    | {
        type: "loading";
      }
    | {
        type: "error";
        message: string;
      }
  >({ type: "initial" });
  const router = useRouter();

  const sendRegistration: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const formData = {
      fullName: e.currentTarget.fullName.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    setWizard({ type: "loading" });
    try {
      let resp = await registerUser(
        formData.email,
        formData.password,
        formData.fullName
      );
      if (resp.ok === true) {
        router.replace("/");
      } else {
        setWizard({ type: "error", message: resp.message });
      }
    } catch (err) {
      setWizard({ type: "error", message: "Failed to register" });
    }
  };
  return (
    <form
      className="m-auto flex flex-col items-center p-2 w-2/4"
      onSubmit={sendRegistration}
    >
      <img
        src="/assets/register.png"
        alt="logo"
        width="80"
        className="logo inline-block mb-4"
      />
      <p className="m-2 font-bold">You don't have an account? </p>
      <p className="font-bold mb-4"> Let's change that </p>
      <label htmlFor="fullName" className="mt-4 mb-2">
        <FontAwesomeIcon icon={faFileText} className="mr-2 h-5 w-5" /> Full Name
      </label>
      <Input
        className="w-full"
        type="fullName"
        required
        size="small"
        name="fullName"
        id="fullName"
      />
      <label htmlFor="email" className="my-4">
        <FontAwesomeIcon icon={faUser} className="mr-2 h-5 w-5" />
        Your email address
      </label>
      <Input
        className="w-full"
        type="email"
        required
        size="small"
        name="email"
        id="email"
      />

      <label htmlFor="password" className="my-4">
        <FontAwesomeIcon icon={faLock} className="mr-2 h-5 w-5" />
        Password
      </label>
      <Input
        className="w-full"
        type="password"
        required
        size="small"
        name="password"
        id="password"
      />
      <Button
        size="medium"
        color={`${wizard.type !== "loading" ? "black" : "beige"}`}
        variant="full"
        type="submit"
        disabled={wizard.type === "loading"}
        className="mt-4 rounded-2xl w-full"
      >
        {wizard.type === "loading" ? "Loading..." : "Register"}
      </Button>
      {wizard.type === "error" && (
        <p className="text-red-500 font-bold">{wizard.message}</p>
      )}
    </form>
  );
};

export default Register;
