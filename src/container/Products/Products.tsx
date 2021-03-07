import React, { useEffect, useState } from 'react';
import CardProduct from '@components/cardProduct/CardProduct';
import Section from '@components/section/Section';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import ButtonCard from '@components/buttonCard/ButtonCard';
import { useHistory, useLocation } from 'react-router-dom';
import { useLazyQuery, useQuery } from '@apollo/client';
import { CATEGORIES_QUERY, DISTRIBUTORS_QUERY, PRODUCTS_QUERY } from '@services/products';
import BasicLoading from '@components/basicLoading/BasicLoading';
import { format } from 'date-fns';
import {
  CategoriesButtonsContainer,
  CategoryContainer,
  InputSearchContainer,
  EmptyContainer,
  ProductContainer,
  ProductListContainer,
  ProductsContainer,
} from './Pruducts.styles';
// @ts-ignore
import SearchIcon from '../../../public/assets/icons/search.svg';

const Products = ({ onChangeItemCard, bagItems, lat, long }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleChangeItemsCard = (item, value) => {
    onChangeItemCard(item, value);
  };
  const { loading: loadingCategories, data: categories } = useQuery(CATEGORIES_QUERY);
  const [getDistribuitors, { loading: loadingDistribuitors, data: distribuitors }] = useLazyQuery(DISTRIBUTORS_QUERY);
  const [getProducts, { loading: loadingProducts, data: products }] = useLazyQuery(PRODUCTS_QUERY);

  const handleChangeSearch = (e) => {};

  const handleGetProducts = (id: string, search: string, categoryId: string | null) => {
    const queryVariables = {
      id,
      search,
      categoryId,
    };
    getProducts({ variables: queryVariables });
  };

  const handleClickCategory = (id: string) => {
    const firstDistribuitor = distribuitors?.pocSearch[0];

    if (id === selectedCategory) {
      handleGetProducts(firstDistribuitor.id, '', null);
      return setSelectedCategory('');
    }
    handleGetProducts(firstDistribuitor.id, '', id);
    setSelectedCategory(id);
  };

  useEffect(() => {
    const queryVariables = {
      algorithm: 'NEAREST',
      lat,
      long,
      now: `${format(new Date(), "yyyy-MM-dd'T'HH:mm:ss").toString()}.000Z`,
    };
    getDistribuitors({ variables: queryVariables });
  }, []);

  useEffect(() => {
    if (distribuitors?.pocSearch?.length > 0) {
      const firstDistribuitor = distribuitors?.pocSearch[0];
      handleGetProducts(firstDistribuitor.id, '', null);
    }
  }, [distribuitors]);

  const isEmptyProducts = products?.poc.products.length === 0;

  if (loadingDistribuitors) {
    return (
      <Section>
        <ProductsContainer>
          <EmptyContainer>
            <BasicLoading size={30} />
          </EmptyContainer>
        </ProductsContainer>
      </Section>
    );
  }

  if (distribuitors?.pocSearch?.length === 0) {
    return <Section>Não encontramos distribuidores na sua região</Section>;
  }

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
            disabled={loadingDistribuitors}
          />
        </InputSearchContainer>
        <CategoriesButtonsContainer>
          {categories &&
            categories.allCategory.map((category) => (
              <CategoryContainer key={category.id}>
                <ButtonCard id={category.id} title={category.title} isSelected={category.id === selectedCategory} onClick={handleClickCategory} />
              </CategoryContainer>
            ))}
        </CategoriesButtonsContainer>
        {loadingProducts && (
          <EmptyContainer>
            <BasicLoading size={30} />
          </EmptyContainer>
        )}
        {isEmptyProducts && <EmptyContainer>Não encontramos produtos </EmptyContainer>}
        <ProductListContainer>
          {products?.poc.products.map((product) => (
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
