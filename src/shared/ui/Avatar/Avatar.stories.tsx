import {
  ComponentStory,
  ComponentMeta,
} from '@storybook/react';

import { Avatar } from './Avatar';
import AvatarPng from './avatar.png';

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Avatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
  src: AvatarPng,
};

export const Small = Template.bind({});
Small.args = {
  size: 50,
  src: AvatarPng,
};
