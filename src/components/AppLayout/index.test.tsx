import * as React from 'react';
import { render } from '@testing-library/react';
import AppLayout from '.';

describe('AppLayout', () => {
  it('should render correctly', () => {
    const { container } = render(<AppLayout />);
    expect(container).toMatchSnapshot();
  });
});
