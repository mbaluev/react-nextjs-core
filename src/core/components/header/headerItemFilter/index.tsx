import React from 'react';
import FilterListIcon from '@mui/icons-material/FilterList';
import {MEDIA_SM, useWindowSize} from '@hooks/useWindowSize';
import {HeaderItem} from '@components/header/headerItem';
import {HeaderIcon} from '@components/header/headerIcon';

export interface IHeaderItemFilterProps {
  hasFilter?: boolean;
  openFilter?: (value: boolean) => void;
}
export const HeaderItemFilter = (props: IHeaderItemFilterProps) => {
  const {hasFilter, openFilter} = props;
  const size = useWindowSize();

  const filterClick = () => {
    if (openFilter) openFilter(true);
  };

  return hasFilter && size.width <= MEDIA_SM ? (
    <HeaderItem onClick={filterClick}>
      <HeaderIcon icon={<FilterListIcon />} />
    </HeaderItem>
  ) : null;
};
