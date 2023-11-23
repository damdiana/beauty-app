import React from "react";
import Link from "next/link";
import { UserProfile } from "@/services/types";
import {
  ProfileGenderLabels,
  ProfileGoalsLabels,
  ProfileMakeupBrandsLabels,
  ProfileProductsUsedLabel,
  ProfileRoutineProductsLabels,
  ProfileSkinConcernLabels,
  ProfileSkinConditionsLabels,
  ProfileSkinTypeLabels,
  ProfileSkincareBrandsLabels,
} from "@/Constants";

let formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

const ProfileView = ({ userProfile }: { userProfile: UserProfile }) => {
  return (
    <div>
      <div className="border m-1 px-2 py-4 mb-4">
        <p className="font-bold mb-2"> General Information</p>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <p className="text-gray-600"> Gender </p>
            {userProfile.gender === undefined || userProfile.gender === null ? (
              <Link
                href="/profile/editprofile"
                color="black"
                className="rounded-2xl w-full underline"
              >
                Add your gender
              </Link>
            ) : (
              <span> {ProfileGenderLabels[userProfile.gender]}</span>
            )}
          </div>
          {userProfile.birthdate !== undefined &&
            userProfile.birthdate !== null && (
              <div className="flex flex-col ">
                <p className="text-gray-600"> Birthday </p>
                <span>{formatter.format(userProfile.birthdate)}</span>
              </div>
            )}
          <div className="flex flex-col mr-2 ">
            <p className="text-gray-600"> My Goal(s) </p>
            {userProfile.goals.length === 0 ? (
              <Link
                href="/profile/editprofile"
                color="black"
                className="rounded-2xl w-full underline"
              >
                Add your goal
              </Link>
            ) : (
              userProfile.goals.map((goal, index) => (
                <React.Fragment key={goal}>
                  {index > 0 && ","}
                  <span> {ProfileGoalsLabels[goal]}</span>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="border m-1 p-1 mb-4">
        <p className="font-bold mb-2"> Skin Information </p>
        <div className="grid grid-cols-2">
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skin Type(s) </p>
            <div>
              {userProfile.skin_types.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your skin type
                </Link>
              ) : (
                userProfile.skin_types.map((skintype, index) => (
                  <React.Fragment key={skintype}>
                    {index > 0 && ","}
                    <span> {ProfileSkinTypeLabels[skintype]}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skin Concern(s) </p>
            <div>
              {userProfile.skin_concerns.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your skin concern(s)
                </Link>
              ) : (
                userProfile.skin_concerns.map((concern, index) => (
                  <React.Fragment key={concern}>
                    {index > 0 && ","}
                    <span> {ProfileSkinConcernLabels[concern]}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skin Condition(s) </p>
            <div>
              {userProfile.skin_conditions.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your skin condition(s)
                </Link>
              ) : (
                userProfile.skin_conditions.map((condition, index) => (
                  <React.Fragment key={condition}>
                    {index > 0 && ","}
                    <span> {ProfileSkinConditionsLabels[condition]}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600 "> Products used in your routine </p>
            <div>
              {userProfile.routine_products.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your products
                </Link>
              ) : (
                userProfile.routine_products.map((product, index) => (
                  <React.Fragment key={product}>
                    {index > 0 && ","}
                    <span> {ProfileRoutineProductsLabels[product]}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skincare brands used </p>
            <div>
              {userProfile.skincare_brands === undefined ||
              userProfile.skincare_brands.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add skincare brands
                </Link>
              ) : (
                userProfile.skincare_brands.map((brand, index) => (
                  <React.Fragment key={brand}>
                    {index > 0 && ","}
                    <span> {ProfileSkincareBrandsLabels[brand]}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border m-1 p-1">
        <p className="font-bold mb-2"> Makeup Information </p>
        <div className="grid grid-cols-2">
          <div className="flex flex-col mt-2">
            <p className="text-gray-600"> Using makeup? </p>
            <span> {userProfile.using_makeup === true ? "Yes" : "No"} </span>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600 "> Makeup brands used </p>
            <div>
              {userProfile.makeup_brands.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add makeup brands
                </Link>
              ) : (
                userProfile.makeup_brands.map((makeupbrand, index) => (
                  <React.Fragment key={makeupbrand}>
                    {index > 0 && ","}
                    <span> {ProfileMakeupBrandsLabels[makeupbrand]}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div>
            <p className="text-gray-600 "> Makeup products used </p>
            {userProfile.products_used.length === 0 ? (
              <Link
                href="/profile/editprofile"
                color="black"
                className="rounded-2xl w-full underline"
              >
                Add your products
              </Link>
            ) : (
              userProfile.products_used.map((product, index) => (
                <React.Fragment key={product}>
                  {index > 0 && ","}
                  <span> {ProfileProductsUsedLabel[product]}</span>
                </React.Fragment>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfileView };
