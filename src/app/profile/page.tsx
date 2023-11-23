import { ProfileView } from "@/components/ProfileView";
import getUserServerSide from "@/services/server/UserService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

const ProfilePage = async () => {
  const user = await getUserServerSide();

  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col ">
        <h2 className="text-lg m-2"> My Profile </h2>
        {user !== undefined && (
          <ProfileView
            userProfile={{
              gender: user.gender,
              goals: user.goals,
              skin_concerns: user.skin_concerns,
              skin_conditions: user.skin_conditions,
              skin_types: user.skin_types,
              makeup_brands: user.makeup_brands,
              skincare_brands: user.skincare_brands,
              products_used: user.products_used,
              routine_products: user.routine_products,
              birthdate: user.birthdate,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
