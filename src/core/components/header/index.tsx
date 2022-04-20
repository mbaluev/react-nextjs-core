import React, {useState} from 'react';
import {ParsedUrlQueryInput} from 'querystring';
import MenuIcon from '@mui/icons-material/Menu';
import {MEDIA_SM, useWindowSize} from '@hooks/useWindowSize';
import {HeaderMobile} from '@components/header/headerMobile';
import {HeaderItem} from '@components/header/headerItem';
import {HeaderLink} from '@components/header/headerLink';
import {HeaderIcon} from '@components/header/headerIcon';
import {HeaderItemSearch, IHeaderItemSearchProps} from '@components/header/headerItemSearch';
import {HeaderItemFilter, IHeaderItemFilterProps} from '@components/header/headerItemFilter';
import './index.scss';

export interface IHeaderItemProps {
  icon?: JSX.Element;
  label?: string;
  path?: string;
  query?: string | ParsedUrlQueryInput | null;
  isActive?: boolean;
  position?: 'left' | 'right';
  dot?: boolean;
}

export interface IHeaderProps {
  items?: IHeaderItemProps[];
  searchProps?: IHeaderItemSearchProps;
  filterProps?: IHeaderItemFilterProps;
}
export const Header = (props: IHeaderProps) => {
  const {items, searchProps, filterProps} = props;
  const [openHeader, setOpenHeader] = useState<boolean>(false);
  const size = useWindowSize();

  const itemsLeft = items?.filter((item) => item.position === 'left') || [];
  const itemsRight = items?.filter((item) => item.position === 'right') || [];

  return (
    <React.Fragment>
      <div className="header">
        <div className="header__container">
          {(itemsLeft.length > 0 || size.width <= MEDIA_SM) && (
            <div className="header__left">
              {size.width > MEDIA_SM ? (
                itemsLeft
                  ?.filter((item) => item.position === 'left')
                  .map((item, index) => (
                    <HeaderItem key={index}>
                      <HeaderLink {...item} />
                    </HeaderItem>
                  ))
              ) : (
                <HeaderItem onClick={() => setOpenHeader(true)}>
                  <HeaderIcon icon={<MenuIcon />} />
                </HeaderItem>
              )}
            </div>
          )}
          {(searchProps?.hasSearch || filterProps?.hasFilter) && (
            <div className="header__center">
              <HeaderItemSearch {...searchProps} />
              <HeaderItemFilter {...filterProps} />
            </div>
          )}
          {itemsRight.length > 0 && (
            <div className="header__right">
              {itemsRight
                ?.filter((item) => item.position === 'right')
                .map((item, index) => (
                  <HeaderItem key={index}>
                    <HeaderIcon {...item} />
                  </HeaderItem>
                ))}
            </div>
          )}
        </div>
      </div>
      <HeaderMobile items={items} open={openHeader} setOpen={setOpenHeader} />
    </React.Fragment>
  );
};
