import React, {useState} from 'react';
import {FormField, FormSection} from '@components/form';
import {Button} from '@components/button';
import {DateFieldControl} from '@components/fields';

export const DateFieldControls = () => {
  const [value, setValue] = useState<Date | null | undefined>(new Date());
  const [edit, setEdit] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <FormSection title="DateField" id="date">
      <FormField title="1. DateFieldControl">
        <DateFieldControl disabled />
        <DateFieldControl />
        <DateFieldControl helperText="Error message" error={true} />
      </FormField>
      <FormField title="2. DateFieldControl view">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setEdit(!edit)}
        >
          {edit ? 'view' : 'edit'}
        </Button>
        <DateFieldControl
          value={value}
          isEdit={edit}
          onChange={(date) => setValue(date)}
        />
      </FormField>
      <FormField title="3. DateFieldControl loading">
        <Button
          variant="contained"
          color="blue"
          className="field-control"
          onClick={() => setLoading(!loading)}
        >
          {loading ? 'edit' : 'loading'}
        </Button>
        <DateFieldControl
          value={value}
          loading={loading}
          onChange={(date) => setValue(date)}
        />
      </FormField>
    </FormSection>
  );
};
