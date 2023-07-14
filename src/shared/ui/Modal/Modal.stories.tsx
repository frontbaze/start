import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nemo consectetur alias odio molestias laborum, explicabo corporis, ratione nisi sequi soluta enim minus impedit velit. Tempora asperiores nihil sint magni!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus nemo consectetur alias odio molestias laborum, explicabo corporis, ratione nisi sequi soluta enim minus impedit velit. Tempora asperiores nihil sint magni!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
