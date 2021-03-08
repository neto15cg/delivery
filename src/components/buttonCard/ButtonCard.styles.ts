import { device } from '@utils/mediaQuerys';
import styled, { css } from 'styled-components';

export const StyledButtonCard = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  color: 464646;
  font-size: 12px;
  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 150ms ease;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  border: none;
  outline: none;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #ffd700;
    `}

  ${device.mobile} {
    width: 100%;
  }
`;
