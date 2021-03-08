import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { mockAxios, renderWithRoute, userEvent } from '@utils/testHelper';
import { LocationDetailMock, LocationsPredictionsMock, MockUrlLocationDetail, MockUrlLocationPredictions } from '@containers/Home/__tests__/_fixtures';
import HomePage from '../HomePage';

describe('HomePage', () => {
  it('should render HomePage', async () => {
    renderWithRoute(<HomePage />);
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
    expect(screen.getByTestId('input-drop-down-home')).toBeInTheDocument();
    expect(screen.queryAllByText(/delivery/i)).toHaveLength(2);
    expect(screen.getByText(/SE FOR BEBER, DEIXA QUE A GENTE LEVA PARA VOCÊ, NÃO DIRIJA/i)).toBeInTheDocument();
  });

  it('should call navigate if search address and click in one render HomePage', async () => {
    const historyMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      useHistory: () => ({
        push: historyMock,
      }),
    }));
    mockAxios.get.mockImplementation(async (url) => {
      if (url === MockUrlLocationPredictions) {
        return {
          status: 200,
          data: LocationsPredictionsMock,
          headers: {},
          config: {},
          statusText: 'ok',
        };
      }
      if (url === MockUrlLocationDetail) {
        return {
          status: 200,
          data: LocationDetailMock,
          headers: {},
          config: {},
          statusText: 'ok',
        };
      }
    });
    const wrapper = renderWithRoute(<HomePage />);

    userEvent.type(screen.getByTestId('input-drop-down-home'), 'Avenida Olívia');
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));
    userEvent.click(screen.getByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i));
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(2));
    expect(wrapper.history.location.pathname).toBe('/products');
  });
});
