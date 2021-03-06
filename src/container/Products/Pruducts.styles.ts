import { device } from '@utils/mediaQuerys';
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: calc(100vh - 72px);
`;

export const InputSearchContainer = styled.div`
  margin-bottom: 40px;
`;

export const CategoryContainer = styled.div`
  margin: 4px;
  ${device.mobile} {
    width: 100%;
  }
`;

export const CategoriesButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
