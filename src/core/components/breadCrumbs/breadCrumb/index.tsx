import React, {FC} from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

export type TBreadCrumb = {
  url?: URL | string;
  label?: string;
  className?: string;
  isStatic?: boolean;
  loadFromSession?: boolean;
  onNavigate?: (url: URL | string) => void;
};

export const BreadCrumb: FC<TBreadCrumb> = (props) => {
  const {className, label, url, isStatic, onNavigate} = props;

  const onClick = () => {
    if (!isStatic && onNavigate && url) {
      onNavigate(url);
    }
  };

  const cls = classNames('bread-crumb', className, {
    'bread-crumb_static': Boolean(isStatic),
  });

  return (
    <div className={cls} onClick={onClick}>
      {label}
    </div>
  );
};
