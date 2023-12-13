import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button-Link/Button/Button";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const EmailResetForm = ({
  initialValue,
  onSave,
  label,
}: {
  initialValue: string;
  onSave: (email: string, password: string) => void;
  label: string;
}) => {
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState(initialValue);
  const [wizard, setWizard] = useState<
    | {
        type: "initial";
      }
    | {
        type: "editable";
      }
    | {
        type: "loading";
      }
    | {
        type: "error";
        message: string;
      }
  >({ type: "initial" });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      setWizard({ type: "loading" });
      await onSave(e.currentTarget.email.value, e.currentTarget.password.value);
      setWizard({ type: "initial" });
    } catch (err) {
      if (err instanceof Error) {
        setWizard({ type: "error", message: err.message });
      } else {
        setWizard({ type: "error", message: "Unable to change your email." });
      }
    }
  };

  if (
    wizard.type === "editable" ||
    wizard.type === "loading" ||
    wizard.type === "error"
  ) {
    return (
      <div className="p-1 mb-2 ">
        <form className="flex flex-col gap-y-2.5" onSubmit={onSubmit}>
          <div className="flex justify-between border border-black border-solid">
            <input
              className="p-2 outline-none w-[90%]"
              type="email"
              placeholder="Your new email"
              name="email"
              id="email"
              required
              value={emailValue}
              onChange={(e) => {
                setEmailValue(e.target.value);
              }}
            />
            <Button
              variant="text"
              color="black"
              size="small"
              type="reset"
              onClick={() => {
                setEmailValue("");
              }}
            >
              <FontAwesomeIcon icon={faX} className="mr-3 h-5 w-5" />
            </Button>
          </div>
          <div className="flex justify-between border border-black border-solid">
            <input
              className="p-2 outline-none w-[90%]"
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              required
              value={passwordValue}
              onChange={(e) => {
                setPasswordValue(e.target.value);
              }}
            />
            <Button
              variant="text"
              color="black"
              size="small"
              type="reset"
              onClick={() => {
                setPasswordValue("");
              }}
            >
              <FontAwesomeIcon icon={faX} className="mr-3 h-5 w-5" />
            </Button>
          </div>
          <div className="flex flex-col">
            <Button
              variant="full"
              color={`${wizard.type !== "loading" ? "black" : "beige"}`}
              size="medium"
              className="mb-2"
              type="submit"
              disabled={wizard.type === "loading"}
            >
              {wizard.type === "loading" ? "Loading..." : "  Save Changes"}
            </Button>
            <Button
              variant="text"
              color="black"
              size="medium"
              onClick={() => {
                setWizard({ type: "initial" });
                setEmailValue(initialValue);
                setPasswordValue("");
              }}
            >
              Cancel
            </Button>
            {wizard.type === "error" && (
              <p className="text-red-500 font-bold ml-2 text-center">
                {wizard.message}
              </p>
            )}
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-1">
      <h3 className="font-bold ml-2"> {label} </h3>
      <div className="flex justify-between">
        <p className="text-sm ml-2"> {initialValue} </p>
        <Button
          variant="text"
          color="black"
          size="medium"
          onClick={() => {
            setWizard({ type: "editable" });
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EmailResetForm;
