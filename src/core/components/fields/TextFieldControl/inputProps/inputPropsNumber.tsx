import React from 'react';
import {InputAdornment} from '@mui/material';
import {EditFormatNumber} from '@components/fields';

export const inputPropsNumber = (adornment?: string) => {
  return {
    inputProps: {min: 1},
    inputComponent: EditFormatNumber as any,
    endAdornment: adornment && <InputAdornment position="end">{adornment}</InputAdornment>,
  };
};
