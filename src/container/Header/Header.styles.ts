import styled from 'styled-components';

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
  margin-left: 8px;
  cursor: pointer;
  &:before {
    content: ${(props) => `'${props.items}'`};
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
    font-weight: 500;
  }
`;
