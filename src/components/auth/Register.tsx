"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import {
  faEye,
  faFileText,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "../Button-Link/Link/Link";

const Register = () => {
  const sendRegistration: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = {
      firstName: e.currentTarget.firstName.value,
      lastName: e.currentTarget.lastName.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    console.log(formData);
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
      <label htmlFor="firstName" className="mt-4 mb-2">
        <FontAwesomeIcon icon={faFileText} className="pr-2" /> First Name
      </label>
      <Input
        className="w-full"
        type="firstName"
        required
        size="small"
        name="firstName"
        id="firstName"
      />

      <label htmlFor="lastName" className="my-4">
        <FontAwesomeIcon icon={faFileText} className="pr-2" /> Last Name
      </label>
      <Input
        className="w-full"
        type="lastName"
        required
        size="small"
        name="lastName"
        id="lastName"
      />
      <label htmlFor="email" className="my-4">
        <FontAwesomeIcon icon={faUser} className="pr-2" />
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

      <label htmlFor="email" className="my-4">
        <FontAwesomeIcon icon={faUser} className="pr-2" />
        Confirm your email address
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
        <FontAwesomeIcon icon={faLock} className="pr-2" />
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

      <label htmlFor="password" className="my-4">
        <FontAwesomeIcon icon={faLock} className="pr-2" />
        Confirm your password
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
        color="black"
        variant="full"
        type="submit"
        className="mt-4 rounded-2xl w-full"
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
