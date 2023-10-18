import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button-Link/Button/Button";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { HTMLInputTypeAttribute, useState } from "react";

type Props = {
  label: string;
  initialValue: string;
  type: HTMLInputTypeAttribute;
  onSave: (value: string) => void;
};

const EditableField = ({ label, initialValue, type, onSave }: Props) => {
  const [value, setValue] = useState(initialValue);

  const [isEditable, setIsEditable] = useState(false);

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsEditable(false);
    onSave(value);
  };

  if (isEditable === true) {
    return (
      <div>
        <h2 className="text-lg m-2">
          Edit your <span className="lowercase"> {label} </span>
        </h2>
        <div className="p-1 ">
          <form className="flex justify-betwee flex-col" onSubmit={onSubmit}>
            <div className="flex border border-black border-solid mb-2 ">
              <input
                className="p-2 outline-none w-full"
                type={type}
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
                color="black"
                size="medium"
                className="mb-2"
                type="submit"
              >
                Save Changes
              </Button>
              <Button
                variant="text"
                color="black"
                size="medium"
                onClick={() => {
                  setIsEditable(false);
                  setValue(initialValue);
                }}
              >
                Cancel
              </Button>
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
            setIsEditable(true);
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default EditableField;
