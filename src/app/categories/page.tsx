import { HEADER_NAV } from "@/Constants";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header/Header";
import { getCategories } from "@/model/CategoryModel";
import getUserServerSide from "@/services/server/UserService";

export default async function Page() {
  const categories = await getCategories();
  const user = await getUserServerSide();

  return (
    <div>
      <Header nav={HEADER_NAV} user={user} />
      <h2 className="font-bold text-center text-xl m-2"> All categories </h2>
      <div className="grid card-grid-cols-3 mt-4 gap-4">
        {categories.map((category) => {
          return <CategoryCard key={category.id} category={category} />;
        })}
      </div>
    </div>
  );
}
