import { ProfileView } from "@/components/ProfileView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "Profile",
};

const ProfilePage = () => {
  return (
    <div className="w-full h-full flex">
      <div className="m-2 p-1 border w-full flex flex-col h-4/5 ">
        <h2 className="text-lg m-2"> My Profile </h2>
        <ProfileView
          userProfile={{
            step0: {
              gender: "female",
              birthDate: 1995,
              goals: [],
            },
            step1: {
              skinTypes: ["combination", "oily"],
              skinConcerns: ["acnee", "dull"],
              skinConditions: ["eczema", "milia"],
              routineProducts: [],
            },
            step2: {
              makeup: false,
              productsUsed: [
                "blush",
                "bronzer",
                "primer",
                "eyeshadow",
                "contour",
                "mascara",
              ],
            },
            step3: {
              skincareBrands: [
                "belief",
                "cerave",
                "innisfree",
                "the_ordinary",
                "other",
              ],
              makeupBrands: [
                "benefit",
                "estee_lauder",
                "laura_mercier",
                "makeup_forever",
                "chanel",
                "charlotte_tilbury",
              ],
            },
          }}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
