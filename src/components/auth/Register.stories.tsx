import RegisterComponent from "./Register";
import { StoryFn, Meta } from "@storybook/react";
export default {
  title: "Login",
  component: RegisterComponent,
} as Meta<typeof RegisterComponent>;
const Template: StoryFn<typeof RegisterComponent> = () => <RegisterComponent />;
export const Register = Template.bind({});
Register.args = {};
