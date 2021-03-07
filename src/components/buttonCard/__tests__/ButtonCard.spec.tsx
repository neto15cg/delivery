import { render, screen } from '@testing-library/react';
import { buildSpy, noop, userEvent } from '@utils/testHelper';
import React from 'react';
import ButtonCard from '../ButtonCard';

describe('ButtonCard', () => {
  it('should render ButtunCard', () => {
    render(<ButtonCard title="Button Card" onClick={noop} isSelected={false} id="123" />);

    expect(screen.getByText(/Button Card/i)).toBeInTheDocument();
  });

  it('should call onClick if ButtunCard', () => {
    const spyOnClick = buildSpy();
    render(<ButtonCard title="Button Card" onClick={spyOnClick} isSelected id="123" />);

    userEvent.click(screen.getByText(/Button Card/i));
    expect(spyOnClick).toBeCalledTimes(1);
  });
});
