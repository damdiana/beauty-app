import { useState } from "react";
import "./ProductImages.css";

type Props = {
  images: {
    src: string;
    alt: string;
  }[];
};

const ProductImages = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex items-center ">
      <div className="flex-col overflow-auto componentHeight">
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            height="150"
            width="150"
            className="m-auto p-2 sideImage cursor-pointer"
            onClick={() => {
              setMainImage(image);
            }}
          />
        ))}
      </div>
      <div>
        <img
          src={mainImage.src}
          alt={mainImage.alt}
          height="400"
          width="400"
          className="p-2 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ProductImages;
