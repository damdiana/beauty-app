import React from "react";
import Button from "./Button";
import { StoryFn, Meta } from "@storybook/react";
export default {
  title: "Button",
  component: Button,
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
} as Meta<typeof Button>;
const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Click Me</Button>
);
export const Text = Template.bind({});
Text.args = {
  variant: "text",
  color: "beige",
  type: "button",
  onClick: () => console.log("Clicked button"),
};
export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  color: "black",
  type: "button",
  onClick: () => console.log("Clicked button"),
};
export const Full = Template.bind({});
Full.args = {
  variant: "full",
  color: "beige",
  type: "button",
  onClick: () => console.log("Clicked button"),
};
