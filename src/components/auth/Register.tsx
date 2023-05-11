import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Input from "../Input/Input";
import { faFileText, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

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
      className="m-4 flex flex-col items-center p-2 w-2/4"
      onSubmit={sendRegistration}
    >
      <img
        src="../src/assets/register.png"
        alt="logo"
        width="80"
        className="logo inline-block"
      />
      <p className="m-2 font-bold">You don't have an account? </p>
      <p className="font-bold"> Let's change that </p>
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

      <label htmlFor="lastName" className="my-2">
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
