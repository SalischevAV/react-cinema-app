import React from 'react';
import { TabWrapperProps } from './TabWrapper.props';

const TabWrapper = ({ children, label }: TabWrapperProps) => {
  return <div>{children}</div>;
};

export default TabWrapper;
