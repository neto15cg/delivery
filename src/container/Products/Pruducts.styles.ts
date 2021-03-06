import { device } from '@utils/mediaQuerys';
import styled from 'styled-components';

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 72px);
`;

export const InputSearchContainer = styled.div`
  margin-bottom: 40px;
`;

export const CategoryContainer = styled.div`
  margin: 4px;
  ${device.mobile} {
    width: 100%;
    margin: 4px 0;
  }
`;

export const CategoriesButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
`;

export const ProductContainer = styled.div`
  margin: 40px;
`;
