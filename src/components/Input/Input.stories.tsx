import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import InputComponent from "./Input";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Input",
  component: InputComponent,
} as Meta<typeof InputComponent>;

const Template: StoryFn<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const Input = Template.bind({});
Input.args = {
  name: "username",
  type: "search",
  placeholder: "Insert username...",
  icon: faMagnifyingGlass,
};
