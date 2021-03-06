import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { buildSpy, userEvent } from '../../../utils/testHelper';

import Input from '../Input';

describe('Input', () => {
  it('should render the Input', () => {
    render(<Input name="inputTest" label="Test label" testId="input" type="text" />);
    expect(screen.getByTestId('input')).toBeTruthy();
  });

  it('Should change input value on type', async () => {
    render(<Input name="inputTest" label="Test label" testId="input" type="text" />);

    userEvent.type(screen.getByRole('textbox'), 'new Value');
    expect(screen.getByRole('textbox')).toHaveValue('new Value');
  });

  it('Should have value passed in props', () => {
    render(<Input value="input value" name="inputTest" type="text" label="Test label" testId="input" />);

    expect(screen.getByRole('textbox')).toHaveValue('input value');
  });

  it('Should have label passed in props', () => {
    render(<Input value="input value" name="inputTest" type="text" label="Test label" testId="input" id="inputTestlabel" />);

    expect(screen.getByRole('textbox', { name: /Test label/i }));
  });

  it('Should render error text', () => {
    render(<Input error="Input error" value="input value" type="text" name="inputTest" label="Test label" testId="input" />);

    expect(screen.getByText(/Input error/i));
  });

  it('should call action on change input', () => {
    const spy = buildSpy();

    render(<Input name="inputTest" onChange={spy} type="text" label="Test label" testId="input" />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'challenge-login' } });
    // @ts-ignore
    expect(input.value).toBe('challenge-login');
    expect(spy).toHaveBeenCalled();
  });

  it('should call action on blur input', () => {
    const spy = buildSpy();
    render(<Input name="inputTest" onBlur={spy} type="text" label="Test label" testId="input" />);
    const input = screen.getByRole('textbox');

    fireEvent.blur(input);
    expect(spy).toHaveBeenCalled();
  });
});
