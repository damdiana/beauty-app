import { Category } from "@/services/types";
import Link from "next/link";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div className="flex-col p-2 text-center cursor-pointer my-2 py-2">
      <Link
        href={`/categories/${category.id}`}
        color="black"
        className="no-underline"
      >
        <img
          src={
            category.image !== null
              ? category.image
              : "/assets/category_default.png"
          }
          alt={category.name}
          width="250"
          height="250"
          className="m-auto p-2"
        />

        <p className="font-bold tracking-wide uppercase block mb-0.5">
          {category.name}
        </p>
      </Link>
    </div>
  );
};

export default CategoryCard;
