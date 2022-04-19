import React, {FC} from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

interface IHeaderItemProps {
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}
export const HeaderItem: FC<IHeaderItemProps> = (props) => {
  const {onClick, className, fullWidth, children} = props;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  const cls = classNames('header__item', className, {
    header__item_fullwidth: Boolean(fullWidth),
  });

  return (
    <div className={cls} onClick={onClickHandler}>
      {children}
    </div>
  );
};
