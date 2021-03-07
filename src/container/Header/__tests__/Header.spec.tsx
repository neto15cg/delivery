import React from 'react';
import { render, screen } from '@testing-library/react';
import { buildSpy, userEvent } from '@utils/testHelper';
import Header from '../Header';

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);

    expect(screen.getByText(/delivery/i)).toBeInTheDocument();
  });

  it('should call onGoback if ckick in icon logo or name logo', () => {
    const spyOnGoBack = buildSpy();
    render(
      <Header
        isProductList
        onGoBack={spyOnGoBack}
        bagProducts={[
          { id: '1', value: 222 },
          { id: '2', value: 28 },
        ]}
      />,
    );
    userEvent.click(screen.getByText(/delivery/i));

    expect(spyOnGoBack).toHaveBeenCalledTimes(1);

    userEvent.click(screen.getByTestId('icon-logo-header'));

    expect(spyOnGoBack).toHaveBeenCalledTimes(2);
  });
});
