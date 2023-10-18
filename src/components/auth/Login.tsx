"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "../Button-Link/Link/Link";

const Login = () => {
  const sendForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    console.log(formData);
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
        color="black"
        size="medium"
        className="mt-6 rounded-2xl w-full"
      >
        Login to your account
      </Button>
    </form>
  );
};

export default Login;
