import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,

  args: {
    src: "https://github.com/MarceloShirayama.png",
    alt: "Marcelo Shirayama",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
