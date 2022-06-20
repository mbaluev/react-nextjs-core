import React, {FC} from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

interface IProps {
  className?: string;
  title?: string | JSX.Element;
  menu?: JSX.Element;
  filter?: JSX.Element;
  breadCrumbs?: JSX.Element;
  isPaddingContainer?: boolean;
}

export const PageLayoutFull: FC<IProps> = (props) => {
  const {
    className,
    filter,
    title,
    menu,
    breadCrumbs,
    isPaddingContainer,
    children,
  } = props;
  const cls = classNames('page-layout-full', className);

  const clsFilter = classNames('page-layout-full__filter');
  const clsTop = classNames('page-layout-full__top');
  const clsTitle = classNames('page-layout-full__title');
  const clsMenu = classNames('page-layout-full__menu');
  const clsBreadCrumbs = classNames('page-layout-full__bread-crumbs');
  const clsContainer = classNames('page-layout-full__container', {
    'page-layout-full__container_padding': Boolean(isPaddingContainer),
  });

  return (
    <div className={cls}>
      {filter && <div className={clsFilter}>{filter}</div>}
      {breadCrumbs && <div className={clsBreadCrumbs}>{breadCrumbs}</div>}
      {(title || menu) && (
        <div className={clsTop}>
          <div className={clsTitle}>{title}</div>
          {menu && <div className={clsMenu}>{menu}</div>}
        </div>
      )}
      {children && <div className={clsContainer}>{children}</div>}
    </div>
  );
};
