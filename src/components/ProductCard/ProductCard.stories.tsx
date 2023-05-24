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
    brand: "lancome",
    title: "Advanced serum",
    nrReviews: 9,
    src: "https://www.sephora.ro/on/demandware.static/-/Sites-masterCatalog_Sephora/default/dw57c2ffcb/images/hi-res/all/SKU/308937_swatch.jpg",
    alt: "serum",
    href: "https://www.sephora.ro/p/advanced-genifique-serum---serum-activator-de-tinerete-P10007363.html",
    height: 250,
    width: 250,
  },
};
