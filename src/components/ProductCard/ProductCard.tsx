"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Link from "../Button-Link/Link/Link";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import { Product } from "@/services/ProductAPI";

type Props = {
  product: Omit<Product, "description" | "ingredients">;
  isFavorite: boolean;
  hasError: boolean;
  onAdd?: () => void;
  onDelete: () => void;
};

const ProductCard = ({
  product,
  isFavorite,
  hasError,
  onAdd,
  onDelete,
}: Props) => {
  const handleClick = () => {
    if (!isFavorite) {
      if (onAdd !== undefined) {
        onAdd();
      }
    } else {
      onDelete();
    }
  };

  return (
    <section className="text-center cursor-pointer my-2 py-2">
      <div className="flex-col p-2">
        <Link
          href={`/products/${product.id}`}
          variant="text"
          color="black"
          className="no-underline"
        >
          <img
            src={product.images[0]}
            alt={product.name}
            width="250"
            height="250"
            className="m-auto p-2"
          />
          <span className="font-bold tracking-wide uppercase block mb-0.5">
            {product.brand_name}
          </span>
          <p className="font-bold">{product.name} </p>
        </Link>
        <Button
          variant="text"
          color="black"
          size="medium"
          className="mt-2"
          onClick={handleClick}
        >
          <FontAwesomeIcon
            icon={isFavorite ? faHeartSolid : faHeartEmpty}
            className="h-5 w-5"
          />
        </Button>
        {hasError ? <p className="text-red-500"> Oops! Action failed! </p> : ""}
      </div>
    </section>
  );
};

export default ProductCard;
