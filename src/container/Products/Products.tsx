import React, { useEffect, useState } from 'react';
import CardProduct from '@components/cardProduct/CardProduct';
import Section from '@components/section/Section';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import ButtonCard from '@components/buttonCard/ButtonCard';
import { getUrlParameter } from '@utils/urlParamterHelper';
import { useHistory } from 'react-router-dom';
import {
  CategoriesButtonsContainer,
  CategoryContainer,
  InputSearchContainer,
  ProductContainer,
  ProductListContainer,
  ProductsContainer,
} from './Pruducts.styles';
// @ts-ignore
import SearchIcon from '../../../public/assets/icons/search.svg';

import { CategoriesMock, ProductListMock } from './__tests__/fixtures';

const Products = ({ onChangeItemCard, bagItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const history = useHistory();
  const handleChangeItemsCard = (item, value) => {
    onChangeItemCard(item, value);
  };

  const handleChangeSearch = (e) => {};

  const handleClickCategory = (id: string) => {
    if (id === selectedCategory) {
      return setSelectedCategory('');
    }
    setSelectedCategory(id);
  };

  useEffect(() => {
    const lat = getUrlParameter('lat');
    const lng = getUrlParameter('lng');
    if (!lat || !lng) {
      history.push('/');
    }
  }, []);

  return (
    <Section>
      <ProductsContainer>
        <InputSearchContainer>
          <InputDropDown
            testId="input-search"
            loading={false}
            name="address"
            type="text"
            placeholder="Busque sua bebida favorita"
            onChange={handleChangeSearch}
            leftIcon={SearchIcon}
          />
        </InputSearchContainer>
        <CategoriesButtonsContainer>
          {CategoriesMock.data.allCategory.map((category) => (
            <CategoryContainer key={category.id}>
              <ButtonCard id={category.id} title={category.title} isSelected={category.id === selectedCategory} onClick={handleClickCategory} />
            </CategoryContainer>
          ))}
        </CategoriesButtonsContainer>
        <ProductListContainer>
          {ProductListMock.data.poc.products.map((product) => (
            <ProductContainer key={product.id}>
              <CardProduct
                onChange={(value) => handleChangeItemsCard(product, value)}
                value={bagItems.find((item) => item.id === product.id)?.value || 0}
                description={product.title}
                srcImage={product?.images[0].url}
                productValue={product.productVariants[0].price}
              />
            </ProductContainer>
          ))}
        </ProductListContainer>
      </ProductsContainer>
    </Section>
  );
};

export default Products;
