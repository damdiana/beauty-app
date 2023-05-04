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
  size: "small" | "medium" | "large";
};

const Input = ({
  placeholder,
  name,
  type,
  className,
  icon,
  required,
  size,
}: PropsWithChildren<Props>) => {
  return (
    <div className="relative inline-block">
      <input
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        className={`input ${className} ${size} bg-white rounded-2xl w-60 p-2 ${
          icon !== undefined ? "pl-8" : ""
        }`}
      />
      {icon !== undefined && (
        <FontAwesomeIcon
          icon={icon}
          className={`absolute left-2 top-3 pl-1 text-gray-400 ${size}`}
        />
      )}
    </div>
  );
};

export default Input;
