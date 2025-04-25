import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import Transition, { TransitionItem } from '.';

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
    x: 0,
    y: 50,
    opacity: 0,
    delay: 0.1,
  },
  render: args => {
    const items = Array(2)
      .fill(0)
      .map((_, i) => ({
        label: i % 2 ? 'itemB' : 'itemA',
        duration: 0.1 * (i + 1),
      }));

    return (
      <>
        {items.map(({ label, duration }, idx) => (
          <TransitionItem key={idx} {...args} duration={duration}>
            {label}
          </TransitionItem>
        ))}
      </>
    );
  },
};

export const Group: Story = {
  args: {
    x: 0,
    y: 50,
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

export const Observer: Story = {
  args: {
    x: 0,
    y: 50,
    opacity: 0,
    delay: 0.1,
    isObserver: false,
    observeOnce: true,
  },
  render: args => {
    const items = Array(15)
      .fill(0)
      .map((_, i) => ({
        label: i % 2 ? 'itemB' : 'itemA',
        duration: 0.1 * (i + 1),
      }));

    return (
      <>
        {items.map(({ label, duration }, idx) => (
          <TransitionItem key={idx} {...args} duration={duration}>
            {label}
          </TransitionItem>
        ))}
      </>
    );
  },
};
