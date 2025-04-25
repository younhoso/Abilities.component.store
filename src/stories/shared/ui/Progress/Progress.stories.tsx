import type { Meta, StoryObj } from '@storybook/react';

import Progress from '.';

const meta: Meta<typeof Progress> = {
  title: 'Shared/Progress',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 60,
    size: 'md',
    isIndeterminate: false,
  },
};

export const Colors: Story = {
  render: () => {
    const variants = [
      { value: 80, color: 'default' },
      { value: 80, color: 'primary' },
      { value: 80, color: 'secondary' },
      { value: 80, color: 'success' },
      { value: 80, color: 'warning' },
      { value: 80, color: 'danger' },
    ] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: 400 }}>
        {variants.map((props, idx) => (
          <Progress key={idx} {...props} label={`${props.color} (${props.value}%)`} />
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes = [
      { size: 'sm', value: 40 },
      { size: 'md', value: 60 },
      { size: 'lg', value: 80 },
    ] as const;

    return (
      <>
        {sizes.map((props, idx) => (
          <Progress
            key={idx}
            {...props}
            color="primary"
            label={`${props.size.toUpperCase()} - ${props.value}%`}
          />
        ))}
      </>
    );
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
  },
};
