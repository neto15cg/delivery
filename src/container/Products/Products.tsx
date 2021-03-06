import React, { useState } from 'react';
import CardProduct from '@components/cardProduct/CardProduct';
import Section from '@components/section/Section';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import ButtonCard from '@components/buttonCard/ButtonCard';
import { CategoriesMock } from '@components/cardProduct/__tests__/fixtures';
import { CategoriesButtonsContainer, CategoryContainer, InputSearchContainer, ProductsContainer } from './Pruducts.styles';

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
      </ProductsContainer>
      {/* <CardProduct /> */}
    </Section>
  );
};

export default Products;
