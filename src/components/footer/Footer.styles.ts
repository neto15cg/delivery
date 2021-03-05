import SvgIcon from '@components/svgIcon/SvgIcon';
import { device } from '@utils/mediaQuerys';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  position: relative;
  height: 350px;
  width: 100%;
  background-color: #ffd700;

  ${device.desktop} {
    background-color: transparent;
  }
`;

export const Phrase = styled.div`
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #464646;
  text-align: center;

  ${device.desktop} {
    padding-bottom: 65px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${device.mobile} {
    padding: 0 20px;
  }

  ${device.desktop} {
    justify-content: flex-end;
  }
`;

export const StyledSvg = styled(SvgIcon)`
  z-index: -1;
  position: absolute;
  height: auto;
  width: 100%;
  bottom: 0;
`;
