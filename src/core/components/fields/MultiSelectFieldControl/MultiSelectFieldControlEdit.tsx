import React, {useState} from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useUpdateEffect} from '@hooks/useUpdateEffect';
import {classNames} from '@utils/classNames/classNames';
import {MultiSelectFieldControlProps} from '@components/fields';

export const MultiSelectFieldControlEdit = (
  props: MultiSelectFieldControlProps
) => {
  const {
    className,
    variant,
    value,
    onChange,
    items,
    error,
    helperText,
    label,
    multiple,
    placeholder,
    displayEmpty,
    ...other
  } = props;

  const [state, setState] = useState<unknown[] | undefined>(value || []);

  useUpdateEffect(() => {
    setState(value || []);
  }, [value]);

  const cls = classNames(className, {
    'field-control_no-data': !state || state.length === 0,
  });

  return (
    <FormControl variant="outlined" className={cls}>
      {label ? <InputLabel id="label">{label}</InputLabel> : null}
      <Select
        value={state}
        label={label}
        labelId="label"
        onChange={(e, child) => {
          setState(e.target.value as unknown[]);
          if (onChange) {
            onChange(e, child);
          }
        }}
        renderValue={(selected) => {
          const sel = selected as unknown[];
          if (sel?.length === 0) {
            return placeholder;
          }
          return items
            ?.filter((item) => sel?.includes(String(item.value)))
            .map((item) => item.label)
            .join(', ');
        }}
        MenuProps={{
          anchorOrigin: {vertical: 'bottom', horizontal: 0},
          transformOrigin: {vertical: -8, horizontal: 0},
          className: 'multi-select-field-control__menu',
        }}
        IconComponent={ExpandMoreIcon}
        error={!!error}
        displayEmpty={Boolean(placeholder)}
        placeholder={placeholder}
        multiple
        {...other}
      >
        {placeholder && (
          <MenuItem value="" disabled={true}>
            {placeholder}
          </MenuItem>
        )}
        {items?.map((item, index) => {
          return (
            <MenuItem key={index} value={item.value ? String(item.value) : ''}>
              {item.label}
            </MenuItem>
          );
        })}
      </Select>
      {helperText && (
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
