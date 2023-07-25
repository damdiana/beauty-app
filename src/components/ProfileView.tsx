import React from "react";
import { ProfileFormStep0Prop } from "./ProfileForm/components/ProfileFormStep0";
import { ProfileFormStep1Prop } from "./ProfileForm/components/ProfileFormStep1";
import { ProfileFormStep2Prop } from "./ProfileForm/components/ProfileFormStep2";
import { ProfileFormStep3Prop } from "./ProfileForm/components/ProfileFormStep3";
import Link from "next/link";

const ProfileView = ({
  userProfile,
}: {
  userProfile: {
    step0: ProfileFormStep0Prop;
    step1: ProfileFormStep1Prop;
    step2: ProfileFormStep2Prop;
    step3: ProfileFormStep3Prop;
  };
}) => {
  return (
    <div>
      <div className="border m-1 px-2 py-4 mb-4">
        <p className="font-bold mb-2"> General Information</p>
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <p className="text-gray-600"> Gender </p>
            <span> {userProfile.step0.gender} </span>
          </div>
          <div className="flex flex-col ">
            <p className="text-gray-600"> Birthday </p>
            <span> {userProfile.step0.birthDate}</span>
          </div>
          <div className="flex flex-col mr-2 ">
            <p className="text-gray-600"> My Goal(s) </p>
            {userProfile.step0.goals.length === 0 ? (
              <Link
                href="/profile/editprofile"
                color="black"
                className="rounded-2xl w-full underline"
              >
                Add your goal
              </Link>
            ) : (
              userProfile.step0.goals.map((goal, index) => (
                <React.Fragment key={goal}>
                  {index > 0 && ","}
                  <span> {goal}</span>
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
              {userProfile.step1.skinTypes.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your skin type
                </Link>
              ) : (
                userProfile.step1.skinTypes.map((skintype, index) => (
                  <React.Fragment key={skintype}>
                    {index > 0 && ","}
                    <span> {skintype}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skin Concern(s) </p>
            <div>
              {userProfile.step1.skinConcerns.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your skin concern(s)
                </Link>
              ) : (
                userProfile.step1.skinConcerns.map((concern, index) => (
                  <React.Fragment key={concern}>
                    {index > 0 && ","}
                    <span> {concern}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skin Condition(s) </p>
            <div>
              {userProfile.step1.skinConditions.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your skin condition(s)
                </Link>
              ) : (
                userProfile.step1.skinConditions.map((condition, index) => (
                  <React.Fragment key={condition}>
                    {index > 0 && ","}
                    <span> {condition}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600 "> Products used in your routine </p>
            <div>
              {userProfile.step1.routineProducts.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add your products
                </Link>
              ) : (
                userProfile.step1.routineProducts.map((product, index) => (
                  <React.Fragment key={product}>
                    {index > 0 && ","}
                    <span> {product}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600"> Skincare brands used </p>
            <div>
              {userProfile.step3.skincareBrands.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add skincare brands
                </Link>
              ) : (
                userProfile.step3.skincareBrands.map((brand, index) => (
                  <React.Fragment key={brand}>
                    {index > 0 && ","}
                    <span> {brand}</span>
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
            <span> {userProfile.step2.makeup === true ? "Yes" : "No"} </span>
          </div>
          <div className="flex flex-col mb-2">
            <p className="text-gray-600 "> Makeup brands used </p>
            <div>
              {userProfile.step3.makeupBrands.length === 0 ? (
                <Link
                  href="/profile/editprofile"
                  color="black"
                  className="rounded-2xl w-full underline"
                >
                  Add makeup brands
                </Link>
              ) : (
                userProfile.step3.makeupBrands.map((makeupbrand, index) => (
                  <React.Fragment key={makeupbrand}>
                    {index > 0 && ","}
                    <span> {makeupbrand}</span>
                  </React.Fragment>
                ))
              )}
            </div>
          </div>
          <div>
            <p className="text-gray-600 "> Makeup products used </p>
            {userProfile.step2.productsUsed.length === 0 ? (
              <Link
                href="/profile/editprofile"
                color="black"
                className="rounded-2xl w-full underline"
              >
                Add your products
              </Link>
            ) : (
              userProfile.step2.productsUsed.map((product, index) => (
                <React.Fragment key={product}>
                  {index > 0 && ","}
                  <span> {product}</span>
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
