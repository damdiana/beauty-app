import React, { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconProp, icon } from "@fortawesome/fontawesome-svg-core";

type Props = {
  placeholder: string;
  name: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  icon?: IconProp;
  required?: boolean;
};

const Input = ({
  placeholder,
  name,
  type,
  className,
  icon,
  required,
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        className={`input ${className} bg-white rounded-2xl w-60 p-2 ${
          icon !== undefined ? "pl-7" : ""
        }`}
      />
      {icon !== undefined && (
        <FontAwesomeIcon
          icon={icon}
          className="absolute left-6 top-7 text-gray-400"
        />
      )}
    </div>
  );
};

export default Input;
