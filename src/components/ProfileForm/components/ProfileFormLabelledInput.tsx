import { HTMLInputTypeAttribute, PropsWithChildren } from "react";

type Props = {
  label: string;
  name: string;
  value?: string;
  type: HTMLInputTypeAttribute;
  className?: string;
};

const ProfileFormLabelledInput = ({
  label,
  name,
  value,
  type,
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <label>
        <input name={name} value={value} type={type} className={className} />
        <span className="pl-1"> {label} </span>
        {children}
      </label>
    </div>
  );
};

export default ProfileFormLabelledInput;
