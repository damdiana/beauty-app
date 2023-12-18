import { HEADER_NAV } from "@/Constants";
import Header from "@/components/Header/Header";
import { getBrands } from "@/model/BrandModel";
import getUserServerSide from "@/services/server/UserService";
import { Brand } from "@/services/types";
import Link from "next/link";

export default async function Page() {
  let user;
  let brands: Brand[] = [];

  let ableToGetBrands: boolean = true;

  try {
    [brands, user] = await Promise.all([getBrands(), getUserServerSide()]);
  } catch (err) {
    console.error(err);
    ableToGetBrands = false;
  }

  return (
    <div>
      <Header nav={HEADER_NAV} user={user} />
      <h2 className="font-bold text-center text-xl m-2"> All brands </h2>
      <div className="grid card-grid-cols-3 mt-4 gap-4">
        {ableToGetBrands === false && (
          <p className="text-center"> Unable to show the brands </p>
        )}
        {brands.map((brand) => (
          <div className="m-2 text-center" key={brand.id}>
            <Link href={`/brands/${brand.id}`}>{brand.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
