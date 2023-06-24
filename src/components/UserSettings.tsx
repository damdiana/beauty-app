"use client";
import { useState } from "react";
import EditableField from "./EditableField";
import { text } from "stream/consumers";

function UserSettings() {
  const [fullName, setFullName] = useState("Diana Damian");
  const [email, setEmail] = useState("diana.damian@gmail.com");
  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full h-3/5">
        <h2 className="text-lg font-thin m-2"> ACCOUNT DETAILS </h2>
        <div className="p-1">
          <EditableField
            label="Full Name"
            initialValue={fullName}
            type="text"
            onSave={(newFullName) => setFullName(newFullName)}
          />
          <div>
            <EditableField
              label="Email address"
              initialValue={email}
              type="email"
              onSave={(newEmail) => setEmail(newEmail)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
