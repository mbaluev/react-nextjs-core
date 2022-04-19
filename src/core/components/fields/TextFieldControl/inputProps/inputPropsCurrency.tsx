import React from 'react';
import {InputAdornment} from '@mui/material';
import {EditFormatNumber} from '@components/fields';

export const getCurrencySign = (
  currencies?: Record<string, string>,
  codeLat: string = 'USD'
) => {
  return currencies && currencies[codeLat] ? currencies[codeLat] : codeLat;
};

export const inputPropsCurrency = (
  currencies?: Record<string, string>,
  codeLat?: string,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
) => {
  return {
    inputComponent: EditFormatNumber as any,
    endAdornment: (
      <InputAdornment position="end" onClick={onClick}>
        {getCurrencySign(currencies, codeLat)}
      </InputAdornment>
    ),
  };
};
