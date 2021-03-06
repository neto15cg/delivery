import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { buildSpy, noop } from '@utils/testHelper';
import IncrementInput from '../IncrementInput';

describe('IncrementInput', () => {
  it('should render IncrementInput', async () => {
    render(<IncrementInput value={1} maxValue={2} onChange={noop} />);

    expect(screen.getByTestId(/increment-button/i)).toBeInTheDocument();
    expect(screen.getByTestId(/decrement-button/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId(/increment-button/i));
    userEvent.click(screen.getByTestId(/decrement-button/i));
  });

  it('should called onChange when click in IncrementButton and DecrementButton', async () => {
    const spyOnChange = buildSpy();
    render(<IncrementInput minValue={0} value={1} onChange={spyOnChange} />);

    userEvent.click(screen.getByTestId(/increment-button/i));
    expect(spyOnChange).toBeCalledTimes(1);

    userEvent.click(screen.getByTestId(/decrement-button/i));
    expect(spyOnChange).toBeCalledTimes(2);
  });

  it('should not called onChange when click in IncrementButton if maxValue is equal value', async () => {
    const spyOnChange = buildSpy();
    render(<IncrementInput maxValue={1} value={1} onChange={spyOnChange} />);

    userEvent.click(screen.getByTestId(/increment-button/i));
    expect(spyOnChange).toBeCalledTimes(0);
  });

  it('should not called onChange when click in Decrement if min is equal value', async () => {
    const spyOnChange = buildSpy();
    render(<IncrementInput minValue={1} value={1} onChange={spyOnChange} />);

    userEvent.click(screen.getByTestId(/decrement-button/i));
    expect(spyOnChange).toBeCalledTimes(0);
  });

  it('should not called onChange if onChange is undefined', async () => {
    render(<IncrementInput value={1} />);

    userEvent.click(screen.getByTestId(/decrement-button/i));
    userEvent.click(screen.getByTestId(/increment-button/i));
  });
});
