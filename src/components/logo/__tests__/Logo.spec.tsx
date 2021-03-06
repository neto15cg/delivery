import React from 'react';
import { render, screen } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  it('should render Logo', () => {
    render(<Logo />);

    expect(screen.getByText('delivery')).toBeInTheDocument();
  });

  it('should render Logo if isHeader', () => {
    render(<Logo isHeader />);

    expect(screen.getByText('delivery')).toBeInTheDocument();
  });
});
