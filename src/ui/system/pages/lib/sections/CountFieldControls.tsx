import React, {useState} from 'react';
import {FormField, FormSection} from '@components/form';
import {CountFieldControl, getCurrencySign} from '@components/fields';
import {Button} from '@components/button';
import {CURRENCIES_KNOWN} from '@model/currency/mock';

export const CountFieldControls = () => {
  const [value, setValue] = useState<number>(200);
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="CountField" id="count">
      <FormField title="1. CountFieldControl">
        <CountFieldControl
          disabled
          placeholder="disabled"
          min={0}
          max={2000}
          value={300}
          endAdornment={getCurrencySign(CURRENCIES_KNOWN, 'EUR')}
        />
        <CountFieldControl
          placeholder="simple"
          min={0}
          max={2000}
          value={1450}
          endAdornment={getCurrencySign(CURRENCIES_KNOWN, 'EUR')}
        />
        <CountFieldControl
          placeholder="error"
          min={0}
          max={2000}
          value={540}
          endAdornment={getCurrencySign(CURRENCIES_KNOWN, 'EUR')}
          error
          helperText="Error message"
        />
      </FormField>
      <FormField title="2. CountFieldControl view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <CountFieldControl
          isEdit={edit}
          min={0}
          max={2000}
          value={value}
          onChange={(value) => setValue(value)}
          endAdornment={getCurrencySign(CURRENCIES_KNOWN, 'EUR')}
        />
      </FormField>
      <FormField title="3. CountFieldControl loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <CountFieldControl
          loading={loading}
          placeholder="loading"
          min={0}
          max={2000}
          value={value}
          onChange={(value) => setValue(value)}
          endAdornment={getCurrencySign(CURRENCIES_KNOWN, 'EUR')}
        />
      </FormField>
    </FormSection>
  );
};
