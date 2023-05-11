import LoginComponent from "./Login";
import { StoryFn, Meta } from "@storybook/react";
export default {
  title: "Login",
  component: LoginComponent,
} as Meta<typeof LoginComponent>;
const Template: StoryFn<typeof LoginComponent> = () => <LoginComponent />;
export const Login = Template.bind({});
Login.args = {};
