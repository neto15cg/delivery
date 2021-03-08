import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { CategoriesMock, DistribuitorsMock, ProductListMock } from '@containers/Products/__tests__/fixtures';
import { CATEGORIES_QUERY, DISTRIBUTORS_QUERY, PRODUCTS_QUERY } from '@services/products';
import { format } from 'date-fns';
import { renderWithRoute, userEvent } from '@utils/testHelper';
import { MockedProvider } from '@apollo/client/testing';
import ProductsPage from '../ProductsPage';

describe('ProductsPage', () => {
  it('should render Products', async () => {
    const historyMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: historyMock,
      }),
    }));
    const mockGql = [
      {
        request: {
          query: CATEGORIES_QUERY,
        },
        result: CategoriesMock,
      },
      {
        request: {
          query: DISTRIBUTORS_QUERY,
          variables: {
            algorithm: 'NEAREST',
            lat: '123',
            long: '123',
            now: `${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss").toString()}.000Z`,
          },
        },
        result: DistribuitorsMock,
      },
      {
        request: {
          query: PRODUCTS_QUERY,
          variables: {
            id: '532',
            search: '',
            categoryId: null,
          },
        },
        result: ProductListMock,
      },
    ];
    renderWithRoute(
      <MockedProvider mocks={mockGql} addTypename={false}>
        <ProductsPage />
      </MockedProvider>,
      { route: '/products?lat=123&lng=123' },
    );

    await waitFor(() => expect(screen.getByText(/Skol 269ml - Unidade/i)));
    userEvent.click(screen.queryAllByTestId(/increment-button/i)[0]);
    userEvent.click(screen.queryAllByTestId(/increment-button/i)[0]);
    userEvent.click(screen.queryAllByTestId(/decrement-button/i)[0]);
    userEvent.click(screen.queryAllByTestId(/increment-button/i)[1]);
    userEvent.click(screen.queryAllByTestId(/increment-button/i)[1]);
  });

  it('should navigate to HomePage if not exists lng or lat', async () => {
    const historyMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: historyMock,
        useRouteMatch: () => ({ url: '/products' }),
      }),
    }));
    const mockGql = [];
    const wrapper = renderWithRoute(
      <MockedProvider mocks={mockGql} addTypename={false}>
        <ProductsPage />
      </MockedProvider>,
    );
    expect(wrapper.history.location.pathname).toBe('/');
  });
});
