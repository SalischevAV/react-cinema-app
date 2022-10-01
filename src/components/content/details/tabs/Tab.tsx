import React, { useEffect, useState } from 'react';
import { TabProps } from './Tab.props';

const Tab = ({ activeTab, label, click, ...props }: TabProps) => {
  const [className, setClassName] = useState('tab-list-item');
  const onTabClick = () => {
    click(label);
  };

  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => (prev += ' tab-list-active'));
    } else {
      setClassName('tab-list-item');
    }
  }, [activeTab, label]);

  return (
    <>
      <li {...props} className={className} onClick={onTabClick}>
        {label}
      </li>
    </>
  );
};

export default Tab;
