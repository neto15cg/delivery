import { device } from '@utils/mediaQuerys';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: absolute;
  left: -55px;
  top: -20px;
  transform: rotate(-8deg);

  transition: transform 200ms ease-in-out;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 210px;
  height: 150px;
  border: 1px solid #f6f6f6;
  border-radius: 4px;

  &:hover {
    ${ImageContainer} {
      transform: rotate(0deg);
    }
  }

  ${device.mobile} {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  height: calc(150px - 40px);
  padding-left: 50px;
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  color: #7b7575;
  font-size: 12px;
`;

export const CardFooter = styled.div`
  height: 40px;
  display: flex;
  width: 100%;
  flex-direction: row;
  border-top: 1px solid #f6f6f6;
`;

export const InputContainer = styled.div`
  width: calc(210px - 110px);
  display: flex;
  align-items: center;

  ${device.mobile} {
    width: calc(100% - 120px);
  }
`;

export const InputContent = styled.div`
  width: 100%;
`;

export const ValueContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 4px;
  background-color: red;
  width: 110px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  background-color: #f6f6f6;
  font-size: 12px;
  strong {
    font-size: 16px;
  }
  ${device.mobile} {
    width: 120px;
  }
`;
