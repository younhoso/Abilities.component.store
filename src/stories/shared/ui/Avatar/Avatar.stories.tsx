import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import profile2 from 'public/profile2.png';
import profile3 from 'public/profile3.png';
import profile from 'public/profile.png';

import Avatar, { AvatarFallback, AvatarImage } from '.';
import { AvatarInfoStyled } from './styled';

const meta: Meta<typeof AvatarImage> = {
  title: 'Shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  subcomponents: {
    AvatarImage: Avatar.AvatarImage as ComponentType<any>,
    AvatarFallback: Avatar.AvatarFallback as ComponentType<any>,
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;

type AvatarImageStory = StoryObj<typeof AvatarImage>;
type AvatarFallbackStory = StoryObj<typeof AvatarFallback>;

export const AvatarImages: AvatarImageStory = {
  args: {
    src: profile,
    isBordered: false,
    alt: '샘플 이미지',
    size: 'lg',
  },
  render: args => <AvatarImage {...args} />,
};

export const AvatarGroup: AvatarImageStory = {
  args: {
    alt: '샘플 이미지',
    isBordered: true,
    size: 'md',
  },
  render: args => {
    const sources = [profile, profile2, profile3];

    return (
      <Avatar>
        {sources.map((src, index) => (
          <AvatarImage key={index} src={src} {...args} />
        ))}
      </Avatar>
    );
  },
};

export const AvatarFallbacks: AvatarFallbackStory = {
  render: () => {
    return (
      <AvatarFallback>
        <AvatarImage src={profile} isBordered={false} size="md" alt="샘플 이미지" />
        <AvatarInfoStyled>
          <p>Test Steiner</p>
          <p>Avatar@avatar.com</p>
        </AvatarInfoStyled>
      </AvatarFallback>
    );
  },
};
