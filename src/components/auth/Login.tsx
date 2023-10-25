"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "../Button-Link/Link/Link";
import { loginUser } from "@/services/AuthAPI";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState("");

  const router = useRouter();

  const sendForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setFormError("");
    const formData = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    setIsLoading(true);
    try {
      let resp = await loginUser(formData.email, formData.password);
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
      className="flex flex-col items-center p-2 mx-2  w-2/4"
      onSubmit={sendForm}
    >
      <img
        src="/assets/login.png"
        alt="logo"
        width="80"
        className="logo inline-block mb-4"
      />
      <p className="font-bold mb-4">Welcome back!</p>
      <label htmlFor="email" className="my-4">
        <FontAwesomeIcon icon={faUser} className="mr-2 h-5 w-5" />
        Your email
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
        name="password"
        type="password"
        required
        size="small"
        id="password"
      />
      <Button
        type="submit"
        variant="full"
        color={`${isLoading === false ? "black" : "beige"}`}
        size="medium"
        className="mt-6 rounded-2xl w-full "
        disabled={isLoading}
      >
        {isLoading === true ? "Loading..." : "Login to your account"}
      </Button>
      <p className="text-red-500 font-bold">{formError} </p>
    </form>
  );
};

export default Login;
