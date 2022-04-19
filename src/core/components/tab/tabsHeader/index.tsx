import React from 'react';
import {AppBar, Divider, Tab as MuiTab, Tabs as MuiTabs} from '@mui/material';
import {ITabsProps} from '@components/tab';
import './index.scss';

export const TabsHeader = ({onChangeTab, tabs, activeTab}: ITabsProps) => {
  return (
    <div className="tabs__header">
      <AppBar position="static" color="transparent">
        <MuiTabs value={activeTab} onChange={onChangeTab}>
          {tabs.map((tab) => {
            return tab.hide ? null : (
              <MuiTab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                disabled={tab.disabled}
                className="tabs__header-item"
              />
            );
          })}
        </MuiTabs>
        <Divider />
      </AppBar>
    </div>
  );
};
