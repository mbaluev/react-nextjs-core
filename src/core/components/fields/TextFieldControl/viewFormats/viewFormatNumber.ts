import numeral from 'numeral';

export const viewFormatNumber =
  (adornment?: JSX.Element | string, format?: string) =>
  (value?: string | number | undefined) => {
    return `${numeral(value).format(format)} ${adornment}`.trim();
  };
