import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

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
      className="m-4 flex flex-col items-center p-2 w-2/4"
      onSubmit={sendForm}
    >
      <img
        src="../src/assets/login.png"
        alt="logo"
        width="80"
        className="logo inline-block"
      />
      <p className="font-bold">Welcome back!</p>
      <label htmlFor="email" className="my-2">
        <FontAwesomeIcon icon={faUser} className="pr-2" />
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
      <label htmlFor="password" className="my-2">
        <FontAwesomeIcon icon={faLock} className="pr-2" />
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
        className="mt-4 rounded-2xl w-full"
      >
        Login to your account
      </Button>
    </form>
  );
};

export default Login;
