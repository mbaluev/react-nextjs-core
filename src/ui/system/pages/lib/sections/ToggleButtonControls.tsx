import React, {useState} from 'react';
import {FormField, FormSection} from '@components/form';
import {ToggleButtonGroupFieldControl} from '@components/fields';
import {Button} from '@components/button';

const itemsDisabledAll = [
  {value: '1', label: 'disabled option 1'},
  {value: '2', label: 'disabled option 2'},
];
const itemsDisabledOne = [
  {value: '1', label: 'disabled option 1', disabled: true},
  {value: '2', label: 'option 2'},
  {value: '3', label: 'option 3'},
];
const itemsEnabled = [
  {value: '1', label: 'option 1'},
  {value: '2', label: 'option 2'},
  {value: '3', label: 'option 3'},
];

export const ToggleButtonControls = () => {
  const [value, setValue] = useState<string>();
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="ToggleButtonGroup" id="toggle">
      <FormField title="1. Disabled">
        <ToggleButtonGroupFieldControl
          disabled
          items={itemsDisabledAll}
          value="1"
          orientation="vertical"
        />
      </FormField>
      <FormField title="2. Disabled one option">
        <ToggleButtonGroupFieldControl
          items={itemsDisabledOne}
          value="2"
          exclusive
          orientation="vertical"
        />
      </FormField>
      <FormField title="3. Enabled error">
        <ToggleButtonGroupFieldControl
          error={true}
          helperText="Error message"
          items={itemsEnabled}
          value="1"
          exclusive
          orientation="vertical"
        />
      </FormField>
      <FormField title="4. Set view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <ToggleButtonGroupFieldControl
          value={value}
          items={itemsEnabled}
          isEdit={edit}
          onChange={(_e, onChangeValue) => setValue(onChangeValue)}
          orientation="vertical"
        />
      </FormField>
      <FormField title="5. Set loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <ToggleButtonGroupFieldControl
          value={value}
          items={itemsEnabled}
          loading={loading}
          onChange={(_e, onChangeValue) => setValue(onChangeValue)}
          orientation="vertical"
        />
      </FormField>
    </FormSection>
  );
};
