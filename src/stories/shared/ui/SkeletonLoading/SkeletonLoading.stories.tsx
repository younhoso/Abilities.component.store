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

export const Default: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'Younho' });
      })();
    }, []);

    if (!user) return <Loading />; // ✨ 여기서 skeleton 보여줌

    return <div>{user.name}</div>;
  },
};

export const SkeletonTitle: Story = {
  render: () => {
    const [user, setUser] = useState<null | { name: string }>(null);

    useEffect(() => {
      (async () => {
        await delay(1000);
        setUser({ name: 'Younho' });
      })();
    }, []);

    if (!user) return <SkeletonProfile type="title" />; // ✨ 여기서 skeleton 보여줌

    return <div>{user.name}</div>;
  },
};
