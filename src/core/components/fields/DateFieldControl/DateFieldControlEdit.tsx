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
        renderInput={(inputProps) => {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const {value: _inputPropsValue, ...otherProps} = inputProps;
          return (
            <TextFieldControl
              {...otherProps}
              className="date-field-control"
              helperText={helperText}
              error={error}
            />
          );
        }}
        value={state}
        onChange={(onChangeValue) => {
          setState(onChangeValue as Date);
          if (onChange) {
            onChange(onChangeValue as Date, props.name);
          }
        }}
        {...other}
      />
    </LocalizationProvider>
  );
};
