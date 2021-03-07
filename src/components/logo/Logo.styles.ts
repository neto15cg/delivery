import { device } from '@utils/mediaQuerys';
import styled, { css } from 'styled-components';

export const StyledLogo = styled.h1`
  margin: 0;
  font-size: 30px;
  color: #464646;
  font-family: 'Poppins', sans-serif;
  cursor: default;

  ${(props) =>
    props.isHeader &&
    css`
      ${device.mobile} {
        display: none;
      }
    `}

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;
