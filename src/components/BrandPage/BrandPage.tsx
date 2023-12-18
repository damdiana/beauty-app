import { User } from "@/services/types";
import Header from "../Header/Header";
import { HEADER_NAV } from "@/Constants";

const BrandPage = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user?: User;
}) => {
  return (
    <>
      <Header nav={HEADER_NAV} user={user} />
      <main>{children}</main>
    </>
  );
};

export default BrandPage;
