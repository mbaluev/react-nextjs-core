import React, {useState} from 'react';
import {FormField, FormSection} from '@components/form';
import {Button, IButtonProps} from '@components/button';
import {Modal} from '@components/modal';
import {SampleForm} from '../forms/sampleForm';

export const ModalControls = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isRow, setIsRow] = useState<boolean>(false);
  const footerButtons: IButtonProps[] = [
    {
      size: 'medium',
      color: 'grey',
      variant: 'contained',
      children: isRow ? 'vertical' : 'horizontal',
      onClick: () => setIsRow(!isRow),
    },
    {
      size: 'medium',
      variant: 'contained',
      children: 'save',
      onClick: () => setIsOpen(false),
    },
  ];
  return (
    <FormSection title="Dialogs" id="modal">
      <FormField title="1. Simple dialog" align="left">
        <Button variant="outlined" onClick={() => setIsOpen(true)}>
          open dialog
        </Button>
        <Modal
          isOpen={isOpen}
          title="Simple dialog"
          onClose={() => setIsOpen(false)}
          footerButtons={footerButtons}
        >
          <SampleForm isRow={isRow} />
        </Modal>
      </FormField>
    </FormSection>
  );
};
