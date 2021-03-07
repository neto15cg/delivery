import React from 'react';

import { MockedProvider } from '@apollo/client/testing';
import { render, screen, waitFor } from '@testing-library/react';
import { buildSpy, ensureRender, noop, userEvent } from '@utils/testHelper';
import { CATEGORIES_QUERY, DISTRIBUTORS_QUERY, PRODUCTS_QUERY } from '@services/products';
import { format } from 'date-fns';
import Products from '../Products';
import { CategoriesMock, DistribuitorsMock, ProductListMock, ProductListMockSearched, ProductListMockSearchedByCategory } from './fixtures';

describe('ProductsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render products', async () => {
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
    render(
      <MockedProvider mocks={mockGql} addTypename={false}>
        <Products onChangeProductCard={noop} bagProducts={[]} lat="123" lng="123" onGoBack={noop} />
      </MockedProvider>,
    );

    await waitFor(() => expect(screen.getByText(/Skol 269ml - Unidade/i)));
    await waitFor(() => expect(screen.getByText(/Cervejas$/)));
  });

  it('should call onChangeProductCard if click in increment button', async () => {
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
    const spyonChangeProductCard = buildSpy();
    render(
      <MockedProvider mocks={mockGql} addTypename={false}>
        <Products onChangeProductCard={spyonChangeProductCard} bagProducts={[]} lat="123" lng="123" onGoBack={noop} />
      </MockedProvider>,
    );
    await waitFor(() => expect(screen.getByText(/Skol 269ml - Unidade/i)));

    userEvent.click(screen.queryAllByTestId(/increment-button/i)[0]);
    expect(spyonChangeProductCard).toBeCalledTimes(1);
  });

  it('should search products if type input search', async () => {
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
      {
        request: {
          query: PRODUCTS_QUERY,
          variables: {
            id: '532',
            search: 'budweiser',
            categoryId: null,
          },
        },
        result: ProductListMockSearched,
      },
    ];
    render(
      <MockedProvider mocks={mockGql} addTypename={false}>
        <Products onChangeProductCard={noop} bagProducts={[]} lat="123" lng="123" onGoBack={noop} />
      </MockedProvider>,
    );
    await waitFor(() => expect(screen.getByText(/Skol 269ml - Unidade/i)));
    userEvent.type(screen.getByTestId('input-search'), 'budweiser');

    await waitFor(() => expect(screen.queryAllByText(/Budweiser Cerveja Boa/i)).toHaveLength(1));
    await waitFor(() => expect(screen.queryAllByText(/Skol 269ml - Unidade/i)).toHaveLength(0));
    userEvent.clear(screen.getByTestId('input-search'));
  });

  it('should filter by category if type select category', async () => {
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
      {
        request: {
          query: PRODUCTS_QUERY,
          variables: {
            id: '532',
            search: '',
            categoryId: 92,
          },
        },
        result: ProductListMockSearchedByCategory,
      },
    ];

    render(
      <MockedProvider mocks={mockGql} addTypename={false}>
        <Products onChangeProductCard={noop} bagProducts={[]} lat="123" lng="123" onGoBack={noop} />
      </MockedProvider>,
    );

    await waitFor(() => expect(screen.getByText(/Skol 269ml - Unidade/i)));
    await waitFor(() => expect(screen.getByText(/Cervejas$/)));

    userEvent.click(screen.getByText(/Vinhos$/));

    await waitFor(() => expect(screen.getByText(/vinho chileno tinto seco merlot garrafa 750ml/i)));
    await waitFor(() => expect(screen.queryAllByText(/Skol 269ml - Unidade/i)).toHaveLength(0));

    userEvent.click(screen.getByText(/Vinhos$/));
  });
});
