import React, {useState} from 'react';
import {FormControl, FormHelperText, IconButton} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useUpdateEffect} from '@hooks/useUpdateEffect';
import {classNames} from '@utils/classNames/classNames';
import {
  CountSlider,
  CountFieldControlProps,
  getCountDisplayViewValue,
} from '@components/fields';

export const CountFieldControlEdit = (props: CountFieldControlProps) => {
  const {
    value,
    onChange,
    className,
    error,
    helperText,
    format,
    endAdornment,
    ...other
  } = props;

  const [state, setState] = useState<number>(value);

  useUpdateEffect(() => {
    if (onChange) {
      onChange(state);
    }
  }, [state]);

  useUpdateEffect(() => {
    setState(value);
  }, [value]);

  const handleChange = (_event: any, newValue: number | number[]) => {
    if (!Array.isArray(newValue)) {
      setState(newValue);
    }
  };
  const decrease = () => {
    setState(state === props.min ? state : state - 1);
  };
  const increase = () => {
    setState(state === props.max ? state : state + 1);
  };

  const cls = classNames(className, {
    'field-control_no-data': !Boolean(state),
  });

  return (
    <FormControl className={cls}>
      <div className="count-field-control__controls">
        <IconButton
          className="count-field-control__minus"
          size="small"
          onClick={decrease}
          disabled={props.disabled}
        >
          <RemoveIcon fontSize="inherit" />
        </IconButton>
        <div className="count-field-control__label">
          {getCountDisplayViewValue(state, format, endAdornment)}
        </div>
        <IconButton
          className="count-field-control__plus"
          size="small"
          onClick={increase}
          disabled={props.disabled}
        >
          <AddIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div className="count-field-control__slider">
        <CountSlider
          value={state}
          onChange={handleChange}
          valueLabelDisplay="off"
          {...other}
        />
      </div>
      {error && helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
