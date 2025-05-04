import type { Meta, StoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';

import { delay } from '@/utils/delay';

import Loading, { SkeletonProfile } from '.';

const meta: Meta<typeof Loading> = {
  title: 'Shared/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const SkeletonLoading: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'SkeletonLoading' });
      })();
    }, []);

    if (!user) return <Loading />;

    return <div>{user.name}</div>;
  },
};

export const SkeletonAvatar: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'SkeletonLoading' });
      })();
    }, []);

    if (!user) return <SkeletonProfile type="avatar" />;

    return <div>{user.name}</div>;
  },
};

export const SkeletonTitle: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'SkeletonLoading' });
      })();
    }, []);

    if (!user) return <SkeletonProfile type="title" />;

    return <div>{user.name}</div>;
  },
};

export const SkeletonText: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'Younho' });
      })();
    }, []);

    if (!user) return <SkeletonProfile type="text" />;

    return <div>{user.name}</div>;
  },
};

export const SkeletonThumbnail: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'SkeletonLoading' });
      })();
    }, []);

    if (!user) return <SkeletonProfile type="thumbnail" />;

    return <div>{user.name}</div>;
  },
};
