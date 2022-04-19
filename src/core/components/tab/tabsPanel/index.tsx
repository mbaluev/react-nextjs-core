import React from 'react';
import {classNames} from '@utils/classNames/classNames';
import './index.scss';

export interface ITabPanelProps {
  active: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const TabsPanel = (props: ITabPanelProps) => {
  const {children, active, className} = props;

  const cls = classNames('tabs__panel', className, {
    tabs__panel_active: Boolean(active),
  });

  return (
    <div className={cls} hidden={!active}>
      {active && children}
    </div>
  );
};
