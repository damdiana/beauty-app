import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button-Link/Button/Button";
import Link from "../Button-Link/Link/Link";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

type Props = {
  product: Product;
};

type Product = {
  title: string;
  brand: string;
  nrReviews: number;
  src: string;
  alt: string;
  href: string;
  height: number;
  width: number;
};

const ProductCard = ({ product }: Props) => {
  return (
    <section className="text-center cursor-pointer my-2 py-2">
      <img
        src={product.src}
        alt={product.alt}
        height={product.height}
        width={product.width}
        className="m-auto p-2"
      />
      <div className="flex-col p-2">
        <Link
          href={product.href}
          variant="text"
          color="black"
          className="no-underline"
        >
          <span className="font-bold tracking-wide uppercase block mb-0.5">
            {product.brand}
          </span>
          <p className="font-bold">{product.title} </p>
          <p> Reviews: {product.nrReviews} </p>
        </Link>
        <Button variant="full" color="black" size="medium" className="mt-2">
          Add to favorites <FontAwesomeIcon icon={faHeart} />
        </Button>
      </div>
    </section>
  );
};

export default ProductCard;
