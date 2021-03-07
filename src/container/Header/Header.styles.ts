import styled, { css } from 'styled-components';

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
  max-width: 986px;
  padding: 0 20px;
`;
export const ContainerButtons = styled.div`
  display: flex;
`;

export const ContainerBag = styled.div`
  position: relative;
  margin-left: 12px;
  cursor: pointer;
  min-width: 32px;
  min-height: 32px;

  ${(props) =>
    props.items > 0 &&
    css`
      &:before {
        content: ${`'${props.items}'`};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        min-width: 16px;
        min-height: 16px;
        border-radius: 50%;
        background-color: #fe1111;
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
        color: #ffffff;
        font-weight: bold;
        padding: 2px;
      }
    `}
`;

export const StyledIconHeader = styled.div`
  min-width: 40px;
  min-height: 40px;
`;
