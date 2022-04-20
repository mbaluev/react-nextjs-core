import React, {useState} from 'react';
import {FormField, FormSection} from '@components/form';
import {Button} from '@components/button';
import {
  TextFieldControl,
  viewFormatCurrency,
  viewFormatNumber,
  viewFormatPhone,
  inputPropsCurrency,
  inputPropsNumber,
  inputPropsPhone,
} from '@components/fields';
import {CURRENCIES_KNOWN} from '@model/currency/mock';

export const TextFieldControls = () => {
  const [value, setValue] = useState<string>('1500250409');
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="TextField" id="text">
      <FormField title="1. TextFieldControl">
        <TextFieldControl disabled placeholder="disabled" />
        <TextFieldControl placeholder="simple" />
        <TextFieldControl placeholder="multiline" multiline minRows={5} />
        <TextFieldControl placeholder="error" helperText="Error message" error={true} />
      </FormField>
      <FormField title="2. TextFieldControl view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <TextFieldControl
          placeholder="days format"
          value={value}
          isEdit={edit}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsNumber('days')}
          viewFormat={viewFormatNumber('days')}
        />
        <TextFieldControl
          placeholder="percent format"
          value={value}
          isEdit={edit}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsNumber('%')}
          viewFormat={viewFormatNumber('%', '0,0.0')}
        />
        <TextFieldControl
          placeholder="percent format"
          value={value}
          isEdit={edit}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsCurrency(CURRENCIES_KNOWN, 'USD')}
          viewFormat={viewFormatCurrency(CURRENCIES_KNOWN, 'USD')}
        />
        <TextFieldControl
          placeholder="phone format"
          value={value}
          isEdit={edit}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsPhone()}
          viewFormat={viewFormatPhone}
        />
      </FormField>
      <FormField title="3. TextFieldControl loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <TextFieldControl
          placeholder="days format"
          value={value}
          loading={loading}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsNumber('days')}
          viewFormat={viewFormatNumber('days')}
        />
        <TextFieldControl
          placeholder="percent format"
          value={value}
          loading={loading}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsNumber('%')}
          viewFormat={viewFormatNumber('%', '0,0.0')}
        />
        <TextFieldControl
          placeholder="percent format"
          value={value}
          loading={loading}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsCurrency(CURRENCIES_KNOWN, 'USD')}
          viewFormat={viewFormatCurrency(CURRENCIES_KNOWN, 'USD')}
        />
        <TextFieldControl
          placeholder="phone format"
          value={value}
          loading={loading}
          onChange={(e) => setValue(e.target.value)}
          InputProps={inputPropsPhone()}
          viewFormat={viewFormatPhone}
        />
      </FormField>
    </FormSection>
  );
};
