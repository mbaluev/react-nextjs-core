import React from 'react';
import Link from 'next/link';
import {classNames} from '@utils/classNames/classNames';
import {IHeaderItemProps} from '@components/header';
import {HeaderDot} from '@components/header/headerDot';
import './index.scss';

export const HeaderIcon = (props: IHeaderItemProps) => {
  const {path, query, icon, isActive, dot} = props;

  const cls = classNames(
    'header__icon',
    isActive ? 'header__icon_active' : undefined
  );

  return (
    <Link
      href={{
        pathname: path,
        query: query,
      }}
      passHref
    >
      <div className={cls}>
        {icon}
        {dot && <HeaderDot />}
      </div>
    </Link>
  );
};
