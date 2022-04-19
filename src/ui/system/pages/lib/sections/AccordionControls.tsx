import React from 'react';
import {FormField, FormSection} from '@components/form';
import {Accordion} from '@components/accordion';

export const AccordionControls = () => {
  return (
    <FormSection title="Accordions" id="accordion">
      <FormField title="1. Simple accordion" align="left">
        <Accordion title="Simple accordion" isExpanded>
          <FormSection title="Accordion">
            <FormField title="1. Simple accordion" align="left">
              input
            </FormField>
          </FormSection>
        </Accordion>
      </FormField>
      <FormField title="2. Accordion with footer" align="left">
        <Accordion title="Accordion with footer" isExpanded footer>
          <FormSection title="Accordion">
            <FormField title="1. Accordion with footer" align="left">
              input
            </FormField>
          </FormSection>
        </Accordion>
      </FormField>
      <FormField title="3. Accordion with footer buttons" align="left">
        <Accordion
          title="Accordion with footer buttons"
          isExpanded
          footerButtons={[
            {
              variant: 'text',
              children: 'Ok',
            },
            {
              variant: 'text',
              children: 'Cancel',
            },
          ]}
        >
          <FormSection title="Accordion">
            <FormField title="1. Accordion with footer buttons" align="left">
              input
            </FormField>
          </FormSection>
        </Accordion>
      </FormField>
    </FormSection>
  );
};
