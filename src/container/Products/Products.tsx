import React, { useState } from 'react';
import CardProduct from '@components/cardProduct/CardProduct';
import Section from '@components/section/Section';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import ButtonCard from '@components/buttonCard/ButtonCard';
import {
  CategoriesButtonsContainer,
  CategoryContainer,
  InputSearchContainer,
  ProductContainer,
  ProductListContainer,
  ProductsContainer,
} from './Pruducts.styles';
import { CategoriesMock, ProductListMock } from './__tests__/fixtures';

const Products = () => {
  const [value, setValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleChange = (e) => {
    setValue(e);
  };

  const handleChangeSearch = (e) => {};

  const handleClickCategory = (id: string) => {
    if (id === selectedCategory) {
      return setSelectedCategory('');
    }
    setSelectedCategory(id);
  };

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
              <CardProduct value={0} description={product.title} srcImage={product?.images[0].url} productValue={product.productVariants[0].price} />
            </ProductContainer>
          ))}
        </ProductListContainer>
      </ProductsContainer>
    </Section>
  );
};

export default Products;
