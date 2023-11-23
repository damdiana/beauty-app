import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import {
  ProfileGender,
  ProfileGoals,
  ProfileMakeupBrands,
  ProfileProductsUsed,
  ProfileRoutineProducts,
  ProfileSkinConcern,
  ProfileSkinConditions,
  ProfileSkinType,
  ProfileSkincareBrands,
} from "./services/types";

const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : `https://${process.env.VERCEL_URL}`;

const CLIENT_URL = "";

const BASE_URL = typeof window === "undefined" ? SERVER_URL : CLIENT_URL;

const HEADER_NAV = [
  {
    href: "/categories",
    title: "All Categories",
  },
  {
    href: "/categories/74",
    title: "Eyes",
  },
  {
    href: "/categories/779",
    title: "Powder",
  },
  {
    href: "/categories/73",
    title: "Makup",
  },
];

const AUTH_COOKIE_NAME = "token";

const DAYS_30_SECONDS = 60 * 60 * 24 * 30;

let AUTH_COOKIE_CONFIG: Omit<ResponseCookie, "value"> = {
  name: AUTH_COOKIE_NAME,
  httpOnly: true,
  secure: true,
  maxAge: DAYS_30_SECONDS,
};

/*************** >>>> START: PROFILE LABELS */

const ProfileGenderLabels: Record<ProfileGender, string> = {
  [ProfileGender.FEMALE]: "female",
  [ProfileGender.MALE]: "male",
  [ProfileGender.OTHER]: "other",
};

const ProfileGoalsLabels: Record<ProfileGoals, string> = {
  [ProfileGoals.CREATE]: "Create a skincare routine",
  [ProfileGoals.IMPROVE]: "Improve my skincare routine",
  [ProfileGoals.DISCOVER]: "Discover new products",
};

const ProfileSkinTypeLabels: Record<ProfileSkinType, string> = {
  [ProfileSkinType.DRY]: " Dry",
  [ProfileSkinType.OILY]: "Oily",
  [ProfileSkinType.COMBINATION]: "Combination",
  [ProfileSkinType.SENSITIVE]: "Sensitive",
  [ProfileSkinType.NORMAL]: "Normal",
};

const ProfileSkinConcernLabels: Record<ProfileSkinConcern, string> = {
  [ProfileSkinConcern.ACNEE]: "Acnee and scaring",
  [ProfileSkinConcern.DULLNESS]: "Dull and uneven skin tone",
  [ProfileSkinConcern.AGING]: "Aging skin",
  [ProfileSkinConcern.WRINKLES]: "Wrinkles and fine lines",
  [ProfileSkinConcern.SUN_DAMAGE]: "Sun damage",
};

const ProfileSkinConditionsLabels: Record<ProfileSkinConditions, string> = {
  [ProfileSkinConditions.ROSACEA]: "Rosacea",
  [ProfileSkinConditions.DERMATITIS]: "Atopic dermatitis (Eczema)",
  [ProfileSkinConditions.MELASMA]: "Melasma",
  [ProfileSkinConditions.MILIA]: "Milia",
  [ProfileSkinConditions.HYPERPIGMENTATION]: "Hyperpigmentation",
};

const ProfileRoutineProductsLabels: Record<ProfileRoutineProducts, string> = {
  [ProfileRoutineProducts.CLENSER]: "Clenser",
  [ProfileRoutineProducts.MOISTURIZER]: "Moisturizer",
  [ProfileRoutineProducts.SERUM]: "Serum",
  [ProfileRoutineProducts.TONER]: "Toner",
  [ProfileRoutineProducts.EYE_CREAM]: "Eye Cream",
  [ProfileRoutineProducts.FACE_MASK]: "Face Mask",
  [ProfileRoutineProducts.MICELAR_WATER]: "Micelar water",
  [ProfileRoutineProducts.CLENSER_BALM]: "Clenser balm",
  [ProfileRoutineProducts.NO_ROUTINE]: "I don't have a routine",
};

const ProfileProductsUsedLabel: Record<ProfileProductsUsed, string> = {
  [ProfileProductsUsed.FOUNDATION]: "Foundation",
  [ProfileProductsUsed.CONCELEAR]: "Concelear",
  [ProfileProductsUsed.BLUSH]: "Blush",
  [ProfileProductsUsed.BRONZER]: "Bronzer",
  [ProfileProductsUsed.CONTOUR]: "Contour",
  [ProfileProductsUsed.EYELINER]: "Eyeliner",
  [ProfileProductsUsed.MASCARA]: "Mascara",
  [ProfileProductsUsed.EYESHADOW]: "Eyeshadow",
  [ProfileProductsUsed.LIPSTICK]: "Lipstick",
  [ProfileProductsUsed.LIPLINER]: "Lipliner",
  [ProfileProductsUsed.POWDER]: "Powder",
  [ProfileProductsUsed.HIGHLIGHTER]: "Highlighter",
  [ProfileProductsUsed.PRIMER]: "Primer",
  [ProfileProductsUsed.EYEBROW]: "Eyebrow products (pencil, gel, etc)",
};

const ProfileSkincareBrandsLabels: Record<ProfileSkincareBrands, string> = {
  [ProfileSkincareBrands.PAULA_S]: "Paula's Choice",
  [ProfileSkincareBrands.THE_ORDINARY]: "The Ordinary",
  [ProfileSkincareBrands.INKEY]: "Inkey List",
  [ProfileSkincareBrands.ESTEE]: "Estee Lauder",
  [ProfileSkincareBrands.CERAVE]: "Cerave",
  [ProfileSkincareBrands.REN]: "REN",
  [ProfileSkincareBrands.CAUDALIE]: "Caudalie",
  [ProfileSkincareBrands.BELIEF]: "Belief",
  [ProfileSkincareBrands.JART]: "Dr. Jart",
  [ProfileSkincareBrands.FRESH]: "Fresh",
  [ProfileSkincareBrands.INNISFREE]: "Innisfree",
  [ProfileSkincareBrands.LANEIGE]: "Laneige",
  [ProfileSkincareBrands.PIXIE]: "Pixie",
  [ProfileSkincareBrands.SUNDAY_RILEYS]: "Sunday Rileys",
  [ProfileSkincareBrands.SUMMER_FRIDAY]: "Summer Friday",
};

const ProfileMakeupBrandsLabels: Record<ProfileMakeupBrands, string> = {
  [ProfileMakeupBrands.DIOR]: "Dior",
  [ProfileMakeupBrands.CHANEL]: "Chanel",
  [ProfileMakeupBrands.FENTY]: "Fenty",
  [ProfileMakeupBrands.ESTEE]: "Estee Lauder",
  [ProfileMakeupBrands.RARE]: "Rare Beauty",
  [ProfileMakeupBrands.NARS]: "Nars",
  [ProfileMakeupBrands.LAURA_MERCIER]: "Laura Mercier",
  [ProfileMakeupBrands.BENEFIT]: "Benefit",
  [ProfileMakeupBrands.MILK]: "Milk Makeup",
  [ProfileMakeupBrands.TOWER_28]: "Tower 28",
  [ProfileMakeupBrands.MAKEUP_FOREVER]: "Makeup Forever",
  [ProfileMakeupBrands.CT]: "Charlotte Tilbury",
};
/*************** <<<< END: PROFILE LABELS */

export {
  BASE_URL,
  HEADER_NAV,
  AUTH_COOKIE_NAME,
  DAYS_30_SECONDS,
  AUTH_COOKIE_CONFIG,
  ProfileGenderLabels,
  ProfileGoalsLabels,
  ProfileSkinTypeLabels,
  ProfileSkinConcernLabels,
  ProfileSkinConditionsLabels,
  ProfileRoutineProductsLabels,
  ProfileProductsUsedLabel,
  ProfileSkincareBrandsLabels,
  ProfileMakeupBrandsLabels,
};
