import React, {useState, ChangeEvent, useMemo} from 'react';
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  InputLabel,
  Popover,
  Select,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SearchIcon from '@mui/icons-material/Search';
import {classNames} from '@utils/classNames/classNames';
import {stringCompare} from '@utils/string/stringCompare';
import {useUpdateEffect} from '@hooks/useUpdateEffect';
import {Button} from '@components/button';
import {
  TextFieldControl,
  CheckboxFieldControl,
  multiSelectExtRenderValue,
  MultiSelectExtFieldControlProps,
} from '@components/fields';

export const MultiSelectExtFieldControlEdit = <ItemType,>(
  props: MultiSelectExtFieldControlProps<ItemType>
) => {
  const {
    className,
    variant,
    value,
    onChange,
    error,
    helperText,
    label,
    multiple,
    placeholder,
    displayEmpty,
    items,
    valueField = 'value' as keyof ItemType,
    labelField = 'label' as keyof ItemType,
    renderValue,
    renderOption,
    classNameMenu,
    onSave,
    onCancel,
    onClose,
    MenuProps,
    autoPopoverWidth,
    displaySelectedFirst,
    displayCheckboxes = true,
    ...other
  } = props;

  const selectRef = React.useRef<HTMLDivElement>();

  const [open, setOpen] = useState<boolean>(false);
  const setClosed = () => setOpen(false);
  const setOpened = () => setOpen(true);

  const [state, setState] = useState<unknown[] | undefined>(value || []);
  useUpdateEffect(() => {
    setState(value || []);
  }, [value]);

  const cls = classNames(className, {
    'field-control_no-data': !state || state.length === 0,
  });

  const clsMenu = classNames(
    'multi-select-ext-field-control__menu',
    classNameMenu ? classNameMenu : undefined
  );

  const clearAll = () => {
    setSearchText('');
    setState([]);
    if (onChange) onChange([], other.name);
  };
  const selectAll = () => {
    const values = items?.map((d) => {
      return d[valueField];
    });
    setState(values);
    if (onChange) onChange(values, other.name);
  };

  const [searchText, setSearchText] = useState<string>('');
  const search = (item: ItemType, searchText: string) => {
    let ret = false;
    for (let key in item) {
      if (
        key !== valueField &&
        typeof item[key] === 'string' &&
        (item[key] as unknown as string)
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) >= 0
      ) {
        ret = true;
      }
    }
    return ret;
  };
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const itemsFiltered = useMemo(() => {
    const _items = items?.filter((item) => search(item, searchText));
    return displaySelectedFirst
      ? _items
          ?.filter((_item) => state?.includes(_item[valueField]))
          .sort((a, b) =>
            stringCompare(String(a[valueField]), String(b[valueField]))
          )
          .concat(
            _items?.filter((_item) => !state?.includes(_item[valueField]))
          )
      : _items;
    // eslint-disable-next-line
  }, [searchText, state, items, valueField]);

  const onSaveHandler = () => {
    setClosed();
    setSearchText('');
    if (onSave) onSave(state, other.name);
  };
  const onCancelHandler = () => {
    setClosed();
    setSearchText('');
    if (onCancel) onCancel(state, other.name);
  };
  const onChangeHandler = (value: unknown) => {
    let values = [...(state || [])];
    if (multiple) {
      if (values.includes(value)) {
        values = values.filter((v) => v !== value);
      } else {
        values.push(value);
      }
    } else {
      values = [value];
    }
    setState(values);
    if (onChange) onChange(values, other.name);
  };
  const onCloseHandler = () => {
    setClosed();
    setSearchText('');
    if (onClose) onClose(state, other.name);
  };

  return (
    <FormControl variant="outlined" className={cls}>
      {label ? <InputLabel id="label">{label}</InputLabel> : null}
      <Select
        ref={selectRef}
        value={state}
        label={label}
        labelId="label"
        renderValue={(selected) =>
          multiSelectExtRenderValue(
            selected,
            valueField,
            labelField,
            items,
            placeholder,
            renderValue
          )
        }
        IconComponent={open ? ExpandLessIcon : ExpandMoreIcon}
        error={!!error}
        displayEmpty={Boolean(placeholder)}
        placeholder={placeholder}
        open={false}
        onClose={onCloseHandler}
        onOpen={setOpened}
        multiple
        {...other}
      />
      {helperText && (
        <FormHelperText error={!!error}>{helperText}</FormHelperText>
      )}
      <Popover
        open={open}
        anchorEl={selectRef.current}
        onClose={onCloseHandler}
        className={clsMenu}
        anchorOrigin={Object.assign(
          {vertical: 'bottom', horizontal: 'left'},
          MenuProps?.anchorOrigin
        )}
        transformOrigin={Object.assign(
          {vertical: -8, horizontal: 'left'},
          MenuProps?.transformOrigin
        )}
        marginThreshold={10}
        PaperProps={
          autoPopoverWidth
            ? {
                style: {
                  width: selectRef?.current?.clientWidth,
                },
              }
            : undefined
        }
      >
        <div className="multi-select-ext-field-control__search">
          <TextFieldControl
            value={searchText}
            onChange={onChangeSearch}
            onKeyDown={(e) => e.stopPropagation()}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="multi-select-ext-field-control__content">
          {(!itemsFiltered || itemsFiltered?.length === 0) && (
            <div className="multi-select-ext-field-control__menu-item_no-data">
              not found
            </div>
          )}
          {itemsFiltered?.map((item, index) => {
            const checked = state?.includes(item[valueField]);
            const cls = classNames(
              'multi-select-ext-field-control__menu-item',
              {
                'multi-select-ext-field-control__menu-item_checked': Boolean(
                  checked && !displayCheckboxes
                ),
              }
            );
            return (
              <div
                key={index}
                data-value={
                  item[valueField]
                    ? (item[valueField] as unknown as string)
                    : ''
                }
                className={cls}
                onClick={() => onChangeHandler(item[valueField] as unknown)}
              >
                {displayCheckboxes && (
                  <CheckboxFieldControl checked={checked} />
                )}
                {renderOption ? (
                  renderOption(item)
                ) : (
                  <div className="multi-select-ext-field-control__menu-item-label">
                    {item[labelField]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="multi-select-ext-field-control__buttons">
          {onCancel ? (
            <Button
              size="small"
              variant="text"
              color="red"
              onClick={onCancelHandler}
            >
              Cancel
            </Button>
          ) : (
            <Button size="small" variant="text" color="red" onClick={clearAll}>
              Clear
            </Button>
          )}
          {onSave ? (
            <Button
              size="small"
              variant="contained"
              color="blue"
              onClick={onSaveHandler}
            >
              Select
            </Button>
          ) : (
            multiple && (
              <Button
                size="small"
                variant="contained"
                color="blue"
                onClick={selectAll}
              >
                Select all
              </Button>
            )
          )}
        </div>
      </Popover>
    </FormControl>
  );
};
