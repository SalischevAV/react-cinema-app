import React, { useState } from 'react';
import Tab from './Tab';
import { TabsProps } from './Tabs.props';
import './Tabs.scss';

const Tabs = ({ children }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child) => {
          const { label } = child.props;
          return <Tab activeTab={activeTab} key={label} label={label} click={onClickTabItem} />;
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          if (child.props.label !== activeTab) {
            return undefined;
          }
          return child.props.children;
        })}
      </div>
    </div>
  );
};

export default Tabs;
