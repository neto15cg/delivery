import { act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export const ensureRender = async () => {
  await act(() => Promise.resolve());
};

export const buildSpy = () => jest.fn();

export const noop = () => undefined;
export const { expect } = global as any;
export { userEvent };
