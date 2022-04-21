import React from 'react';
import {Form, FormField, FormSection} from '@components/form';
import {
  inputPropsCurrency,
  inputPropsNumber,
  inputPropsPhone,
  TextFieldControl,
  viewFormatCurrency,
  viewFormatNumber,
  viewFormatPhone,
} from '@components/fields';
import './index.scss';
import {CURRENCIES_KNOWN} from '@model/currency/mock';

interface ISimpleModalFormProps {
  isRow?: boolean;
}

export const SampleForm = (props: ISimpleModalFormProps) => {
  const {isRow} = props;
  return (
    <Form className="sample-form">
      <FormSection title="Enter some data">
        <FormField isRow={isRow} title="Days">
          <TextFieldControl
            placeholder="days format"
            InputProps={inputPropsNumber('days')}
            viewFormat={viewFormatNumber('days')}
          />
        </FormField>
        <FormField isRow={isRow} title="Percent">
          <TextFieldControl
            placeholder="percent format"
            InputProps={inputPropsNumber('%')}
            viewFormat={viewFormatNumber('%', '0,0.0')}
          />
        </FormField>
        <FormField isRow={isRow} title="Currency">
          <TextFieldControl
            placeholder="currency format"
            InputProps={inputPropsCurrency(CURRENCIES_KNOWN, 'USD')}
            viewFormat={viewFormatCurrency(CURRENCIES_KNOWN, 'USD')}
          />
        </FormField>
        <FormField isRow={isRow} title="Enter your personal phone number">
          <TextFieldControl
            InputProps={inputPropsPhone()}
            viewFormat={viewFormatPhone}
          />
        </FormField>
      </FormSection>
    </Form>
  );
};
