import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Lorem Ipsum',
  text: 'lorem ipsum description',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Lorem Ipsum',
  text: 'lorem ipsum description',
  theme: TextTheme.ERROR,
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Lorem Ipsum',
};

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'lorem ipsum description',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Lorem Ipsum',
  text: 'lorem ipsum description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Lorem Ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'lorem ipsum description',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
