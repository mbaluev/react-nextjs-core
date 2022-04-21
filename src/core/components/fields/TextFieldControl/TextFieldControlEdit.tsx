import React, {useState} from 'react';
import {TextField} from '@mui/material';
import {useUpdateEffect} from '@hooks/useUpdateEffect';
import {classNames} from '@utils/classNames/classNames';
import {
  isTextFieldControlHasData,
  TextFieldControlProps,
} from '@components/fields';

export const TextFieldControlEdit = (props: TextFieldControlProps) => {
  const {className, variant, value, onChange, regex, multiline, ...other} =
    props;

  const [state, setState] = useState<string | number | undefined>(value);

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  const cls = classNames(className, {
    'field-control_no-data': !isTextFieldControlHasData(state),
  });

  return (
    <TextField
      className={cls}
      variant="outlined"
      value={state || ''}
      multiline={multiline}
      onChange={(e) => {
        if (regex) {
          if (regex.test(e.target.value)) {
            setState(e.target.value);
            if (onChange) onChange(e);
          }
        } else {
          setState(e.target.value);
          if (onChange) onChange(e);
        }
      }}
      {...other}
    />
  );
};
