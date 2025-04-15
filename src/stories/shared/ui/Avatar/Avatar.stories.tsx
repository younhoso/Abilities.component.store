import type { Meta, StoryObj } from '@storybook/react';

import profile from 'public/profile.png';

import { Avatar, AvatarFallback, AvatarImage } from '.';

const meta: Meta<typeof AvatarImage> = {
  title: 'Shared/Avatar',
  component: AvatarImage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AvatarImage>;

export const Default: Story = {
  args: {
    src: profile,
    alt: '샘플 이미지',
    width: 300,
    height: 200,
  },
  render: ({ src, alt, width, height }) => {
    return (
      <Avatar>
        <AvatarImage src={src} alt={alt} width={width} height={height} />
        <AvatarFallback>name</AvatarFallback>
        <AvatarFallback>email</AvatarFallback>
      </Avatar>
    );
  },
};
