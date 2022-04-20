import React, {FC} from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

interface IProps {
  className?: string;
  title?: string | JSX.Element;
  filter?: JSX.Element;
  breadCrumbs?: JSX.Element;
}

export const PageLayout: FC<IProps> = (props) => {
  const {className, title, filter, breadCrumbs, children} = props;
  const cls = classNames('page-layout', className);
  return (
    <div className={cls}>
      {filter && <div className="page-layout__filter">{filter}</div>}
      {breadCrumbs && <div className="page-layout__bread-crumbs">{breadCrumbs}</div>}
      {title && <div className="page-layout__title">{title}</div>}
      <div className="page-layout__container">{children}</div>
    </div>
  );
};
