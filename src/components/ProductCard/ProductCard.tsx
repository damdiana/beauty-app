import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Link from "../Button-Link/Link/Link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Product } from "@/services/ProductAPI";

type Props = {
  product: Omit<Product, "description" | "ingredients">;
};

const ProductCard = ({ product }: Props) => {
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
            className="m-auto p-2"
          />
          <span className="font-bold tracking-wide uppercase block mb-0.5">
            {product.brand_name}
          </span>
          <p className="font-bold">{product.name} </p>
        </Link>
        <Button variant="full" color="black" size="medium" className="mt-2">
          <span className="mr-1"> Add to favorites </span>
          <FontAwesomeIcon icon={faHeart} className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default ProductCard;
