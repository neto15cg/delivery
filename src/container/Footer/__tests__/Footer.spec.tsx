import { render, screen } from '@testing-library/react';
import React from 'react';
import Footer from '../Footer';

describe('Footer', () => {
  it('should render Footer', () => {
    render(<Footer />);

    expect(screen.getByText(/delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/SE FOR BEBER, DEIXA QUE A GENTE LEVA PARA VOCÊ, NÃO DIRIJA/i)).toBeInTheDocument();
  });
});
