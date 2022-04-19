import React from 'react';
import './index.less';

interface IProps {
  count: number;
}

export const HeaderBadge = (props: IProps) => {
  const {count} = props;
  return <div className="header__badge">{count}</div>;
};
