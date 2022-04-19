import React, {Dispatch, SetStateAction} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {MEDIA_SM, useWindowSize} from '@hooks/useWindowSize';
import {IHeaderItemProps} from '@components/header';
import {HeaderItem} from '@components/header/headerItem';
import {HeaderLink} from '@components/header/headerLink';
import './index.scss';

interface IProps {
  items?: IHeaderItemProps[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const HeaderMobile = (props: IProps) => {
  const {items, open, setOpen} = props;
  const size = useWindowSize();
  const onCloseHandler = () => setOpen(false);
  return open && size.width <= MEDIA_SM ? (
    <div className="header-mobile">
      <div className="header-mobile__backdrop" onClick={onCloseHandler} />
      <div className="header-mobile__container">
        <div className="header-mobile__top">
          <div className="header-mobile__top-text">Online Shop</div>
          <div className="header-mobile__top-close">
            <CloseIcon onClick={onCloseHandler} />
          </div>
        </div>
        <div className="header-mobile__content">
          {items
            ?.filter((item) => item.position === 'left')
            .map((item, index) => (
              <HeaderItem key={index} onClick={onCloseHandler}>
                <HeaderLink {...item} />
              </HeaderItem>
            ))}
        </div>
      </div>
    </div>
  ) : null;
};
