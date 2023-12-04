import { JSONContent } from "@tiptap/react";
import { z } from "zod";

export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string | null;
};

export type User = {
  email: string;
  id: number;
  password: string;
  fullName: string;
} & UserProfile;

export type JournalEntry = {
  json_content: JSONContent;
  entry_date: Date;
  id: number;
};

/*************** >>>> START: PROFILE ENUMS */
export enum ProfileGender {
  FEMALE = "1",
  MALE = "2",
  OTHER = "3",
}

export enum ProfileGoals {
  CREATE = "1",
  IMPROVE = "2",
  DISCOVER = "3",
}

export enum ProfileSkinType {
  DRY = "1",
  OILY = "2",
  COMBINATION = "3",
  SENSITIVE = "4",
  NORMAL = "5",
}

export enum ProfileSkinConcern {
  ACNEE = "1",
  DULLNESS = "2",
  AGING = "3",
  WRINKLES = "4",
  SUN_DAMAGE = "5",
}

export enum ProfileSkinConditions {
  ROSACEA = "1",
  DERMATITIS = "2",
  MELASMA = "3",
  MILIA = "4",
  HYPERPIGMENTATION = "5",
}

export enum ProfileRoutineProducts {
  CLENSER = "1",
  MOISTURIZER = "2",
  SERUM = "3",
  TONER = "4",
  EYE_CREAM = "5",
  FACE_MASK = "6",
  MICELAR_WATER = "7",
  CLENSER_BALM = "8",
  NO_ROUTINE = "9",
}

export enum ProfileProductsUsed {
  FOUNDATION = "1",
  CONCELEAR = "2",
  BLUSH = "3",
  BRONZER = "4",
  CONTOUR = "5",
  EYELINER = "6",
  MASCARA = "7",
  EYESHADOW = "8",
  LIPSTICK = "9",
  LIPLINER = "10",
  POWDER = "11",
  HIGHLIGHTER = "12",
  PRIMER = "13",
  EYEBROW = "14",
}

export enum ProfileSkincareBrands {
  PAULA_S = "1",
  THE_ORDINARY = "2",
  INKEY = "3",
  ESTEE = "4",
  CERAVE = "5",
  REN = "6",
  CAUDALIE = "7",
  BELIEF = "8",
  JART = "9",
  FRESH = "10",
  INNISFREE = "11",
  LANEIGE = "12",
  PIXIE = "13",
  SUNDAY_RILEYS = "14",
  SUMMER_FRIDAY = "15",
}

export enum ProfileMakeupBrands {
  DIOR = "1",
  CHANEL = "2",
  FENTY = "3",
  ESTEE = "4",
  RARE = "5",
  NARS = "6",
  LAURA_MERCIER = "7",
  BENEFIT = "8",
  MILK = "9",
  TOWER_28 = "10",
  MAKEUP_FOREVER = "11",
  CT = "12",
}
/*************** <<<< END: PROFILE ENUMS */

export const ZodUserProfile = z.object({
  gender: z.nativeEnum(ProfileGender),
  birthdate: z.coerce.date().optional(),
  goals: z.nativeEnum(ProfileGoals).array(),
  skin_types: z.nativeEnum(ProfileSkinType).array(),
  skin_concerns: z.nativeEnum(ProfileSkinConcern).array(),
  skin_conditions: z.nativeEnum(ProfileSkinConditions).array(),
  routine_products: z.nativeEnum(ProfileRoutineProducts).array(),
  using_makeup: z.boolean().optional(),
  products_used: z.nativeEnum(ProfileProductsUsed).array(),
  skincare_brands: z.nativeEnum(ProfileSkincareBrands).array(),
  makeup_brands: z.nativeEnum(ProfileMakeupBrands).array(),
});

export type UserProfile = z.infer<typeof ZodUserProfile>;
