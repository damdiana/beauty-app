import { PropsWithChildren } from "react";

type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const ProfileFormLabelledInput = ({
  label,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <label>
        <input {...rest} />
        <span className="pl-1"> {label} </span>
        {children}
      </label>
    </div>
  );
};

export default ProfileFormLabelledInput;
