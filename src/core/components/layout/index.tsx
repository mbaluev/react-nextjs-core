import React, {FC} from 'react';
import {Header, IHeaderProps} from '@components/header';
import {ILoaderProps, Loader} from '@components/loader';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

export interface ILayoutProps {
  className?: string;
  contentId?: string;
  headerProps?: IHeaderProps;
  loaderProps?: ILoaderProps;
}

export const Layout: FC<ILayoutProps> = (props) => {
  const {className, contentId, headerProps, loaderProps, children} = props;
  const cls = classNames('layout', className);
  return (
    <div className={cls}>
      <Header {...headerProps} />
      <div className="layout__content" id={contentId}>
        {children}
      </div>
      <Loader {...loaderProps} />
    </div>
  );
};

export const LayoutEmpty: FC = ({children}) => <>{children}</>;
