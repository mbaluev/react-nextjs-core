import React from 'react';
import {TabsHeader, TabsPanels} from '@components/tab';
import './index.scss';
import {classNames} from '@utils/classNames/classNames';

export interface ITabItemProps {
  label: string;
  value: string;
  hide?: boolean;
  disabled?: boolean;
  className?: string;
  content?: any;
}
export interface ITabsProps {
  className?: string;
  onChangeTab: (_: React.ChangeEvent<unknown>, newValue: string) => void;
  tabs: ITabItemProps[];
  activeTab: string;
}

export const Tabs = (props: ITabsProps) => {
  const cls = classNames('tabs', props.className);
  return (
    <div className={cls}>
      <TabsHeader {...props} />
      <TabsPanels {...props} />
    </div>
  );
};
