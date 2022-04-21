import React from 'react';
import Link from 'next/link';
import {classNames} from '@utils/classNames/classNames';
import {IHeaderItemProps} from '@components/header';
import './index.scss';

export const HeaderLink = (props: IHeaderItemProps) => {
  const {label, path, icon, isActive, query} = props;

  const cls = classNames(
    'header__link',
    isActive ? 'header__link_active' : undefined
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
        {label && <span className="header__link-label">{label}</span>}
      </div>
    </Link>
  );
};
