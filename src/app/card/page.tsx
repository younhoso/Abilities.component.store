'use client';

import clsx from 'clsx';

import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import CardContent from '@/components/Card/CardContent';
import CardDescription from '@/components/Card/CardDescription';
import CardFooter from '@/components/Card/CardFooter';
import CardHeader from '@/components/Card/CardHeader';
import CardTitle from '@/components/Card/CardTitle';
import { CardPageStyled } from '@/styles/pageStyled/CardPageStyled';

export default function CardPage() {
  return (
    <CardPageStyled className={clsx('cardPage')}>
      <Card>
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>CardContent</CardContent>
        <CardFooter>
          <Button mode="disabled" className="cancel">
            Cancel
          </Button>
          <Button mode="secondary" className="deploy">
            Deploy
          </Button>
        </CardFooter>
      </Card>
    </CardPageStyled>
  );
}
