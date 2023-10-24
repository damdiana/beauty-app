"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import { faFileText, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { registerUser } from "@/services/AuthAPI";
import { useRouter } from "next/navigation";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const router = useRouter();

  const sendRegistration: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    setFormError("");
    const formData = {
      fullName: e.currentTarget.fullName.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    setIsLoading(true);
    try {
      let resp = await registerUser(
        formData.email,
        formData.password,
        formData.fullName
      );
      if (resp.ok === true) {
        router.replace("/");
      } else {
        setFormError(resp.message);
      }
    } catch (err) {
      setFormError("Failed to login");
    } finally {
      setIsLoading(false);
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
        color={`${isLoading === false ? "black" : "beige"}`}
        variant="full"
        type="submit"
        disabled={isLoading}
        className="mt-4 rounded-2xl w-full"
      >
        {isLoading === true ? "Loading..." : "Register"}
      </Button>
      {formError !== "" && (
        <p className="text-red-500 font-bold"> {formError} </p>
      )}
    </form>
  );
};

export default Register;
