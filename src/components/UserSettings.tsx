"use client";
import { useState } from "react";
import EditableField from "./EditableField";
import { updateUserEmail, updateUserFullName } from "@/services/User";
import EmailResetForm from "./EmailResetForm";

function UserSettings({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) {
  const [currentFullName, setCurrentFullName] = useState(fullName);
  const [currentEmail, setCurrentEmail] = useState(email);

  const updateFullName = async (name: string) => {
    let resp = await updateUserFullName(name);
    if (resp.ok) {
      setCurrentFullName(resp.userFullName);
    } else {
      throw new Error(resp.message);
    }
  };

  const updateEmail = async (email: string, password: string) => {
    let resp = await updateUserEmail(email, password);
    if (resp.ok) {
      setCurrentEmail(resp.userEmail);
    } else {
      throw new Error(resp.message);
    }
  };

  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full h-3/5">
        <h2 className="text-lg font-thin m-2"> ACCOUNT DETAILS </h2>
        <div className="p-1 flex flex-col gap-y-6 w-[350px] sm:w-[700px]">
          <EditableField
            label="Full Name"
            placeholder="Your full name"
            initialValue={currentFullName}
            type="text"
            onSave={updateFullName}
          />
          <EmailResetForm
            onSave={updateEmail}
            label="Email address"
            initialValue={currentEmail}
          />
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
