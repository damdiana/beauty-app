import React, { HTMLInputTypeAttribute, PropsWithChildren } from "react";
import "./Input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { IconProp, icon } from "@fortawesome/fontawesome-svg-core";

type Props = {
  placeholder?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  className?: string;
  icon?: IconProp;
  required?: boolean;
  value?: string;
  size: "small" | "medium" | "large";
  id?: string;
};

const Input = ({
  placeholder,
  name,
  type,
  className,
  icon,
  required,
  size,
  id,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`${className} relative inline-block`}>
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        id={id}
        className={`input ${size} bg-white rounded-2xl w-full p-2 ${
          icon !== undefined ? "pl-7" : ""
        }`}
      />
      {icon !== undefined && (
        <FontAwesomeIcon
          icon={icon}
          className={`absolute left-2 top-3.5 text-gray-400 ${size}`}
        />
      )}
    </div>
  );
};

export default Input;
