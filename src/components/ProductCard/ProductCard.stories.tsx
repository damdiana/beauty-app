import { Meta, StoryFn } from "@storybook/react";
import ProductCardComponent from "./ProductCard";

export default {
  title: "ProductCard",
  component: ProductCardComponent,
} as Meta<typeof ProductCardComponent>;

const Template: StoryFn<typeof ProductCardComponent> = (args) => (
  <ProductCardComponent {...args} />
);

export const ProductCard = Template.bind({});
ProductCard.args = {
  product: {
    brand_name: "lancome",
    name: "Advanced serum",
    images: [
      "https://www.sephora.ro/dw/image/v2/BBQW_PRD/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dwad256f18/images/hi-res/all/SKU/546791_swatch.jpg?sw=240&sh=240&sm=fit",
    ],
    id: "33",
    categ_id: "2131",
    category_name: "skincare",
    brand_id: "3",
  },
};
