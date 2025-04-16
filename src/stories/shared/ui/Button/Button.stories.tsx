import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import { Button, ButtonItem } from '.';

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

export const PrimaryMode: Story = {
  render: () => {
    return (
      <Button className="">
        <ButtonItem mode="primary">제출</ButtonItem>
      </Button>
    );
  },
};

export const SecondaryMode: Story = {
  render: () => (
    <Button>
      <ButtonItem mode="secondary">취소</ButtonItem>
    </Button>
  ),
};

export const DisabledMode: Story = {
  render: () => (
    <Button>
      <ButtonItem mode="disabled">비활성화</ButtonItem>
    </Button>
  ),
};
