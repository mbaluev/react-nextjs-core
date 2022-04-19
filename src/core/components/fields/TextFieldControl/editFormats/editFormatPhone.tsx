import React from 'react';
import NumberFormat from 'react-number-format';

interface IProps {
  onChange: (event: {target: {name: string; value: string}}) => void;
  name: string;
}

export const EditFormatPhone = React.forwardRef<NumberFormat<string>, IProps>(
  function NumberFormatCustom(props, ref) {
    const {onChange, ...other} = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        // thousandSeparator=" "
        // decimalScale={2}
        // isNumericString={false}
        format="+7 (###) ###-##-##"
        placeholder="+7 (___) ___-__-__"
      />
    );
  }
);
