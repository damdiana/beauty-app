import ProfileForm from "@/components/ProfileForm/components/ProfileForm/ProfileForm";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Profile",
  description: "My Profile",
};

const MyProfile = () => {
  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col h-3/4 relative">
        <h2 className="text-lg m-2 mb-4"> PROFILE INFORMATION </h2>

        <ProfileForm />
      </div>
    </div>
  );
};

export default MyProfile;
