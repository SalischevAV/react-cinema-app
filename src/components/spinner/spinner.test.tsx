import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner component', () => {
  it('displays spinner', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element).toBeInTheDocument();
  });
  it('spinner has 3 children', () => {
    const { getByTestId } = render(<Spinner />);
    const element = getByTestId('spinner');
    expect(element.children.length).toBe(3);
  });
});
