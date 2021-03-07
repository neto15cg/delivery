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

  ${device.mobile} {
    width: 100%;
    margin: 40px 0 40px 50px;
  }
`;

export const EmptyContainer = styled.div`
  padding-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${device.mobile} {
    padding-top: 40px;
  }
`;

export const EmptyTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  color: #474747;
  font-family: 'Poppins', sans-serif;
  text-align: center;
`;

export const ContainerButton = styled.div`
  max-width: 250px;
`;
