import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button-Link/Button/Button";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { HTMLInputTypeAttribute, useState } from "react";

type Props = {
  label: string;
  initialValue: string;
  type: HTMLInputTypeAttribute;
  onSave: (value: string) => void;
  placeholder: string;
};

const EditableField = ({
  label,
  initialValue,
  type,
  onSave,
  placeholder,
}: Props) => {
  const [value, setValue] = useState(initialValue);
  const [wizard, setWizard] = useState<
    | {
        type: "initial";
      }
    | {
        type: "loading";
      }
    | {
        type: "editable";
      }
    | {
        type: "error";
        message: string;
      }
  >({ type: "initial" });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    try {
      setWizard({ type: "loading" });
      await onSave(value);
      setWizard({ type: "initial" });
    } catch (err) {
      if (err instanceof Error) {
        setWizard({ type: "error", message: err.message });
      } else {
        setWizard({ type: "error", message: "Unable to change your name." });
      }
    }
  };

  if (
    wizard.type === "editable" ||
    wizard.type === "loading" ||
    wizard.type === "error"
  ) {
    return (
      <div>
        <h2 className="text-lg m-2">
          Edit your <span className="lowercase"> {label} </span>
        </h2>
        <div className="p-1">
          <form className="flex justify-between flex-col" onSubmit={onSubmit}>
            <div className="flex justify-between border border-black border-solid">
              <input
                className="p-2 outline-none w-[90%] "
                type={type}
                placeholder={placeholder}
                required
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
              />
              <Button
                variant="text"
                color="black"
                size="small"
                type="reset"
                onClick={() => {
                  setValue("");
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
                  setValue(initialValue);
                }}
              >
                Cancel
              </Button>
              {wizard.type === "error" && (
                <p className="text-red-500 text-center font-bold">
                  {wizard.message}
                </p>
              )}
            </div>
          </form>
        </div>
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

export default EditableField;
