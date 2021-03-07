import React from 'react';
import { render, screen } from '@testing-library/react';
import { buildSpy, userEvent } from '@utils/testHelper';
import CardProduct from '../CardProduct';

describe('CardProduct', () => {
  it('should render CardProduct', () => {
    render(<CardProduct description="Skol beats" value={1} productValue={2.9} />);

    expect(screen.getByText(/Skol beats/i)).toBeInTheDocument();
    expect(screen.getByText(/1/i)).toBeInTheDocument();
    expect(screen.getByText(/R\$/i)).toBeInTheDocument();
    expect(screen.getByText(/2,90/i)).toBeInTheDocument();
  });

  it('should call onChange when click in increment and decrement button', () => {
    const spyOnChange = buildSpy();

    render(<CardProduct description="Skol beats" value={1} productValue={2.9} onChange={spyOnChange} />);
    userEvent.click(screen.getByTestId(/increment-button/i));
    expect(spyOnChange).toBeCalledTimes(1);

    userEvent.click(screen.getByTestId(/decrement-button/i));
    expect(spyOnChange).toBeCalledTimes(2);
  });
});
