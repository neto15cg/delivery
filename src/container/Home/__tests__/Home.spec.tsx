import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { buildSpy, mockAxios, renderWithRoute, userEvent } from '@utils/testHelper';
import Home from '../Home';
import { LocationDetailMock, LocationsPredictionsMock, MockUrlLocationDetail, MockUrlLocationPredictions } from './_fixtures';

describe('HomeContainer', () => {
  it('should render HomeContainer', async () => {
    renderWithRoute(<Home />);
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
    expect(screen.getByTestId('input-drop-down-home')).toBeInTheDocument();
  });

  it('should render locations predictions in dropdown if type a address in input', async () => {
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
    });
    renderWithRoute(<Home />);

    userEvent.type(screen.getByTestId('input-drop-down-home'), 'Avenida Olívia');
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i)).toBeInTheDocument();
  });

  it('should get locationDetail and call onNavigate if click in an option', async () => {
    const onNavigateSpy = buildSpy();
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
    renderWithRoute(<Home onNavigate={onNavigateSpy} />);

    userEvent.type(screen.getByTestId('input-drop-down-home'), 'Avenida Olívia');
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));
    userEvent.click(screen.getByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i));
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(2));
    await waitFor(() => expect(onNavigateSpy).toHaveBeenCalledTimes(1));
  });

  it('should clear locations predictions if click in btn-clear', async () => {
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
    });
    renderWithRoute(<Home />);

    userEvent.type(screen.getByTestId('input-drop-down-home'), 'Avenida Olívia');
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i)).toBeInTheDocument();
    userEvent.click(screen.getByTestId('input-btn-clear'));

    expect(screen.queryAllByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i)).toHaveLength(0);
  });

  it('should clear locations predictions if clear input', async () => {
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
    });
    renderWithRoute(<Home />);

    userEvent.type(screen.getByTestId('input-drop-down-home'), 'Avenida Olívia');
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));
    expect(screen.getByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i)).toBeInTheDocument();
    userEvent.clear(screen.getByTestId('input-drop-down-home'));

    await waitFor(() => expect(screen.queryAllByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i)).toHaveLength(0));
  });

  it('should not render locations predictions if request failed', async () => {
    mockAxios.get.mockRejectedValueOnce(async (url) => {
      if (url === MockUrlLocationPredictions) {
        return {
          status: 200,
          data: LocationsPredictionsMock,
          headers: {},
          config: {},
          statusText: 'ok',
        };
      }
    });
    renderWithRoute(<Home />);

    userEvent.type(screen.getByTestId('input-drop-down-home'), 'Avenida Olívia');
    await waitFor(() => expect(mockAxios.get).toHaveBeenCalledTimes(1));
    await waitFor(() => expect(screen.queryAllByText(/Avenida Olívia Flores - Universidade, Vitória da Conquista - BA, Brasil/i)).toHaveLength(0));
  });
});
