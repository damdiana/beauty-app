import { Meta, StoryFn } from "@storybook/react";
import ProductImagesComponent from "./ProductImages";

export default {
  title: "ProductImages",
  component: ProductImagesComponent,
} as Meta<typeof ProductImagesComponent>;

const Template: StoryFn<typeof ProductImagesComponent> = (args) => (
  <ProductImagesComponent {...args} />
);

export const ProductImages = Template.bind({});
ProductImages.args = {
  images: [
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwd03b4ef6/images/hi-res/all/SKU/348236_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw45bad713/images/hi-res/all/SKU/538626_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwed0bf71d/images/hi-res/all/SKU/471084_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5b5a0b74/images/hi-res/all/SKU/455723_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5b5a0b74/images/hi-res/all/SKU/455723_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5b5a0b74/images/hi-res/all/SKU/455723_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
    {
      src: "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw5b5a0b74/images/hi-res/all/SKU/455723_swatch.jpg?sw=240&sh=240&sm=fit",
      alt: "produs",
    },
  ],
};
