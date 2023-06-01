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
      <img
        src={product.images[0]}
        alt={product.name}
        width="250"
        className="m-auto p-2"
      />
      <div className="flex-col p-2">
        <Link href="#" variant="text" color="black" className="no-underline">
          <span className="font-bold tracking-wide uppercase block mb-0.5">
            {product.brand_name}
          </span>
          <p className="font-bold">{product.name} </p>
        </Link>
        <Button variant="full" color="black" size="medium" className="mt-2">
          Add to favorites <FontAwesomeIcon icon={faHeart} />
        </Button>
      </div>
    </section>
  );
};

export default ProductCard;
