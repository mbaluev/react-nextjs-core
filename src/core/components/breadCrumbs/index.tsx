import React, {FC} from 'react';
import {classNames} from '@utils/classNames/classNames';
import {BreadCrumb, TBreadCrumb} from '@components/breadCrumbs/breadCrumb';
import './index.scss';

interface IProps {
  className?: string;
  breadCrumbs?: TBreadCrumb[];
}

export const BreadCrumbs: FC<IProps> = (props) => {
  const {className, breadCrumbs} = props;
  const cls = classNames('bread-crumbs', className);
  return (
    <div className={cls}>
      {breadCrumbs?.map((item, index) => (
        <BreadCrumb key={index} {...item} />
      ))}
    </div>
  );
};
