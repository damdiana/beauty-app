import Header from "../Header/Header";
import { HEADER_NAV } from "@/Constants";

const CategoryPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header nav={HEADER_NAV} />
      <main>{children}</main>
    </>
  );
};

export default CategoryPage;
