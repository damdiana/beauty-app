import ProfileForm from "@/components/ProfileForm/components/ProfileForm/ProfileForm";
import getUserServerSide from "@/services/server/UserService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Profile",
  description: "Edit Profile",
};

const EditProfile = async () => {
  const user = await getUserServerSide();

  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col h-3/4 relative">
        <h2 className="text-lg m-2 mb-4"> PROFILE INFORMATION </h2>
        {user !== undefined && <ProfileForm user={user} />}
      </div>
    </div>
  );
};

export default EditProfile;
