import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import Button, { ButtonItem } from '.';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  subcomponents: {
    ButtonItem: Button.ButtonItem as ComponentType<any>,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Button>;
type ButtonItemStory = StoryObj<typeof ButtonItem>;

export const PrimaryMode: Story = {
  args: {},
  render: args => {
    return (
      <Button>
        <ButtonItem mode="primary" {...args}>
          제출
        </ButtonItem>
      </Button>
    );
  },
};

export const SecondaryMode: ButtonItemStory = {
  args: {
    mode: 'secondary',
    size: 'lg',
    isLoading: true,
  },
  render: args => <ButtonItem {...args}>취소</ButtonItem>,
};

export const DisabledMode: Story = {
  args: {},
  render: () => (
    <Button>
      <ButtonItem mode="disabled">비활성화</ButtonItem>
    </Button>
  ),
};

export const LoadingMode: ButtonItemStory = {
  args: {
    mode: 'secondary',
    size: 'sm',
    isLoading: true,
  },
  render: args => <ButtonItem {...args}>제출</ButtonItem>,
};
