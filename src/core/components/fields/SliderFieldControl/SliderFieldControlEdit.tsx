import React, {useState} from 'react';
import numeral from 'numeral';
import {FormControl, FormHelperText} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {useUpdateEffect} from '@hooks/useUpdateEffect';
import {classNames} from '@utils/classNames/classNames';
import {
  sliderFieldControlHasData,
  SliderFieldControlProps,
  SliderPopover,
} from '@components/fields';

export const getSliderDisplayEditValue = (
  value?: number | number[],
  format?: string
) => {
  const f = format || '0,0';
  return Array.isArray(value)
    ? `${numeral(value[0]).format(f).replace(/,/g, ' ')} - ${numeral(value[1])
        .format(f)
        .replace(/,/g, ' ')}`
    : numeral(value).format(f).replace(/,/g, ' ');
};

export const SliderFieldControlEdit = (props: SliderFieldControlProps) => {
  const {
    value,
    onChange,
    className,
    placeholder,
    disabled,
    error,
    helperText,
    endAdornment,
    format,
    min = 0,
    max = 100,
    ...other
  } = props;

  const [state, setState] = useState<undefined | number | number[]>(value);

  const inputRef = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const setClosed = () => {
    if (!disabled) {
      handleBlur();
      setOpen(false);
    }
  };
  const setOpened = () => {
    if (!disabled) {
      handleFocus();
      setOpen(true);
    }
  };

  const [triggerChange, setTriggerChange] = useState<boolean>(true);

  useUpdateEffect(() => {
    if (onChange && triggerChange) {
      if (Array.isArray(state) && state[0] === min && state[1] === max) {
        onChange(undefined);
      } else {
        onChange(state);
      }
    }
    setTriggerChange(true);
  }, [state]);

  useUpdateEffect(() => {
    setTriggerChange(false);
    setState(value);
  }, [value]);

  const [focused, setFocused] = useState<boolean>(false);
  const handleFocus = () => {
    if (!disabled) setFocused(true);
  };
  const handleBlur = () => {
    if (!disabled) setFocused(false);
  };

  const cls = classNames(className, {
    'field-control_focused': Boolean(focused),
    'field-control_no-data': !Boolean(sliderFieldControlHasData(state)),
  });

  return (
    <FormControl className={cls} ref={inputRef}>
      <div className="slider-field-control__input" onClick={setOpened}>
        {!state ||
        (Array.isArray(state) && state[0] === min && state[1] === max) ? (
          <div className="slider-field-control__input-placeholder">
            {placeholder}
          </div>
        ) : (
          <div className="slider-field-control__input-value">
            {getSliderDisplayEditValue(state, format)}
          </div>
        )}
        {endAdornment && (
          <div className="slider-field-control__input-end">{endAdornment}</div>
        )}
        <div className="slider-field-control__input-arrow">
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {error && helperText && (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      )}
      <SliderPopover
        anchorEl={inputRef.current}
        onClose={setClosed}
        open={open}
        value={state}
        setValue={setState}
        min={min}
        max={max}
        {...other}
      />
    </FormControl>
  );
};
