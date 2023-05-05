import LinkComponent from "./Link";
import { StoryFn, Meta } from "@storybook/react";
export default {
  title: "Link",
  component: LinkComponent,
  argTypes: {
    variant: {
      options: ["text", "full", "outline"],
      control: { type: "radio" },
    },
    color: {
      options: ["beige", "black"],
      control: { type: "radio" },
    },
  },
} as Meta<typeof LinkComponent>;
const Template: StoryFn<typeof LinkComponent> = (args) => (
  <LinkComponent {...args}>Link</LinkComponent>
);
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  color: "beige",
  href: "https://github.com/damdiana",
};
export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  color: "black",
  href: "https://github.com/damdiana",
};
export const Full = Template.bind({});
Full.args = {
  variant: "full",
  color: "beige",
  href: "https://github.com/damdiana",
};
