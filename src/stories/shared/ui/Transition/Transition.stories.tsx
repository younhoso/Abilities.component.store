import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import { Transition, TransitionItem } from '.';

const meta: Meta<typeof Transition> = {
  title: 'Shared/Transition',
  component: Transition,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
  subcomponents: {
    TransitionItem: Transition.TransitionItem as ComponentType<any>,
  },
};

export default meta;

type Story = StoryObj<typeof Transition>;

export const Item: Story = {
  args: {
    x: 50,
    y: 0,
    opacity: 0,
    delay: 0.1,
  },
  render: args => {
    return (
      <>
        <TransitionItem {...args} duration={0.2}>
          itemA
        </TransitionItem>
        <TransitionItem {...args} duration={0.4}>
          itemB
        </TransitionItem>
      </>
    );
  },
};

export const Group: Story = {
  args: {
    x: 50,
    y: 0,
    opacity: 0,
    duration: 0.3,
    delay: 0.1,
  },
  render: args => {
    const datas = ['itemA', 'itemB', 'itemC'];

    return (
      <Transition {...args}>
        {datas.map((data, index) => {
          return <TransitionItem key={index}>{data}</TransitionItem>;
        })}
      </Transition>
    );
  },
};
