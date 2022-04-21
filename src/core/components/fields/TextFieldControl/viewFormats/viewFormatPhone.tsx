import React from 'react';
import NumberFormat from 'react-number-format';

interface IProps {
  value?: string | number | null;
}
const ViewFormatPhone = (props: IProps) => {
  const {value} = props;
  return (
    <NumberFormat
      value={value}
      format="+7 (###) ###-##-##"
      displayType="text"
    />
  );
};
export const viewFormatPhone = (value?: string | number | null) => {
  return <ViewFormatPhone value={value} />;
};
