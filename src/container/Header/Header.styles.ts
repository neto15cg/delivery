import styled from 'styled-components';
import { device } from '@utils/mediaQuerys';

export const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1040px;

  ${device.mobile} {
    padding: 0 20px;
  }
`;
