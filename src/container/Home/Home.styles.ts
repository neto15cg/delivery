import { device } from '@utils/mediaQuerys';
import styled from 'styled-components';

export const HomeTitle = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-size: 34px;
  line-height: 51px;
  color: #464646;
  font-weight: 500;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 40px;

  ${device.mobile} {
    padding-top: 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 650px;
  padding-bottom: 100px;

  ${device.mobile} {
    padding-bottom: 0;
  }
`;

export const IllustrationContainer = styled.div`
  ${device.mobile} {
    svg {
      min-width: 0;
      width: 360px;
      height: 360px;
      flex: 0 0 360px;
    }
  }
`;
