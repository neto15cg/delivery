import * as React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { AxiosStatic } from 'axios';

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};
// eslint-disable-next-line global-require
export const mockAxios: jest.Mocked<AxiosStatic> = require('axios').default;

export const buildSpy = () => jest.fn();

export const noop = () => undefined;
export const { expect } = global as any;
export { userEvent };

export const renderWithRoute = (ui, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) => {
  const Wrapper = ({ children }) => (
    // @ts-ignore
    <Router history={history}>{children}</Router>
  );
  return {
    ...render(ui, { wrapper: Wrapper }),
    history,
  };
};
