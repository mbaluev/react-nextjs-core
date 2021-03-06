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
import {findSelectItem, SelectFieldControlProps} from '@components/fields';

export const SelectFieldControlEdit = (props: SelectFieldControlProps) => {
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

  const [state, setState] = useState(value || '');

  useUpdateEffect(() => {
    setState(value || '');
  }, [value]);

  const cls = classNames(className, {
    'field-control_no-data': !state || !findSelectItem(items, state),
  });

  return (
    <FormControl variant="outlined" className={cls}>
      {label ? <InputLabel id="label">{label}</InputLabel> : null}
      <Select
        value={state}
        label={label}
        labelId="label"
        onChange={(e, child) => {
          setState(e.target.value);
          if (onChange) {
            onChange(e, child);
          }
        }}
        MenuProps={{
          anchorOrigin: {vertical: 'bottom', horizontal: 0},
          transformOrigin: {vertical: -8, horizontal: 0},
          className: 'select-field-control__menu',
        }}
        IconComponent={ExpandMoreIcon}
        displayEmpty={Boolean(placeholder)}
        placeholder={placeholder}
        error={!!error}
        {...other}
      >
        {placeholder && (
          <MenuItem
            value=""
            className="select-field-control__menu-item_disabled"
          >
            {placeholder}
          </MenuItem>
        )}
        {items?.map((item, index) => {
          return (
            <MenuItem
              key={index}
              value={item.value ? item.value : ''}
              disabled={item.disabled}
            >
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
