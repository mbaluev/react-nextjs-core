import React, {useEffect, useState} from 'react';
import {DatePicker} from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {DateFieldControlProps, TextFieldControl} from '@components/fields';

export const DateFieldControlEdit = (props: DateFieldControlProps) => {
  const {
    value,
    onChange,
    className,
    mask = '____-__-__',
    inputFormat = 'yyyy-dd-MM',
    renderInput,
    helperText,
    error,
    ...other
  } = props;

  const [state, setState] = useState<Date | null>();

  useEffect(() => {
    setState(value);
  }, [value, inputFormat]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        mask={mask}
        inputFormat={inputFormat}
        renderInput={({value, ...props}) => {
          return (
            <TextFieldControl
              {...props}
              className="date-field-control"
              helperText={helperText}
              error={error}
            />
          );
        }}
        value={state}
        onChange={(value) => {
          setState(value as Date);
          if (onChange) {
            onChange(value as Date, props.name);
          }
        }}
        {...other}
      />
    </LocalizationProvider>
  );
};
