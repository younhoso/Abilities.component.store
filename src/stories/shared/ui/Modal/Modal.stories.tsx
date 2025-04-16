import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import { Modal } from '.';
import ModalContents from './ModalContents';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  subcomponents: {
    ModalContents: Modal.ModalContents as ComponentType<any>,
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpenModal: false,
    setIsOpenModal: (v: boolean) => {},
  },
  render: ({ isOpenModal, setIsOpenModal }) => {
    return (
      <>
        {isOpenModal && (
          <Modal>
            <ModalContents isShow={false} onClose={() => setIsOpenModal?.(false)}>
              <h3>Modal창 입니다.</h3>
              <br />
              <p>
                당사는 귀하의 브라우징 경험을 개선하고, 개인화된 광고 또는 콘텐츠를 제공하며,
                <br />
                트래픽을 분석하기 위해 쿠키를 사용합니다. 모두 허용 을 클릭하면 당사의 쿠키
                <br />
                사용에 동의하는 것으로 간주됩니다.
              </p>
            </ModalContents>
          </Modal>
        )}
      </>
    );
  },
};
