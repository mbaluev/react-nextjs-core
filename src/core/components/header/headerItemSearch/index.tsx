import React, {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from '@mui/material';
import {classNames} from '@utils/classNames/classNames';
import {TextFieldControl, TextFieldControlProps} from '@components/fields';
import {HeaderItem} from '@components/header/headerItem';
import './index.scss';

export interface IHeaderItemSearchProps {
  value?: string;
  onSearch?: (value?: string) => void;
  inputProps?: TextFieldControlProps;
  hasSearch?: boolean;
}
export const HeaderItemSearch = (props: IHeaderItemSearchProps) => {
  const {value, onSearch, inputProps, hasSearch} = props;

  const [state, setState] = useState<string | undefined>(value);

  const cls = classNames('header-item-search');

  const onSearchHandler = () => {
    if (onSearch) onSearch();
  };

  // eslint-disable-next-line
  useEffect(() => setState(value), [value]);

  return hasSearch ? (
    <HeaderItem fullWidth>
      <TextFieldControl
        value={state}
        className={cls}
        placeholder="Search"
        onChange={(e) => setState(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearchHandler();
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onSearchHandler} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...inputProps}
      />
    </HeaderItem>
  ) : null;
};
