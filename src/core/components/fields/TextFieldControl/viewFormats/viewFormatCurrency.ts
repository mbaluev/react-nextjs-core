import numeral from 'numeral';
import {getCurrencySign} from '@components/fields';

export const viewFormatCurrency =
  (currencies?: Record<string, string>, codeLat?: string) =>
  (value?: string | number | undefined) => {
    return `${numeral(value).format('0,0')} ${getCurrencySign(
      currencies,
      codeLat
    )}`.trim();
  };
