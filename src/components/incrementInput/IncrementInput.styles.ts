import styled, { css } from 'styled-components';

export const IconContainerCss = css`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StartIconContainer = styled.div`
  ${IconContainerCss};
  position: absolute;
  left: 10px;
`;

export const EndIconContainer = styled.div`
  ${IconContainerCss};
  position: absolute;
  right: 10px;
`;

export const IncrementContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: white;
  font-size: 12px;
  border-radius: 4px;
  font-weight: 500;
  color: #464646;
`;

export const IncrementValue = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #464646;
  font-family: 'Poppins', sans-serif;
`;

export const StyledFabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 50%;
  cursor: pointer;
  border: none;
  outline: none;

  div {
    svg {
      width: 12px;
      height: 12px;
      max-width: 100%;
      min-width: 12px;
      flex: 0 0 12px;
    }
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: #ccc;
      cursor: not-allowed;
    `}
`;
