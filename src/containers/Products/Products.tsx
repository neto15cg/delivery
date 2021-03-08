import React, { useEffect, useState } from 'react';
import CardProduct from '@components/cardProduct/CardProduct';
import Section from '@components/section/Section';
import InputDropDown from '@components/inputDropDown/InputDropDown';
import ButtonCard from '@components/buttonCard/ButtonCard';
import { useLazyQuery, useQuery } from '@apollo/client';
import { CATEGORIES_QUERY, DISTRIBUTORS_QUERY, PRODUCTS_QUERY } from '@services/products';
import Button from '@components/button/Button';
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
  EmptyTitle,
  ContainerButton,
} from './Pruducts.styles';
// @ts-ignore
import SearchIcon from '../../../public/assets/icons/search.svg';
import { ProductsProps, ProductType } from './Products.types';

const Products = ({ onChangeProductCard, bagProducts, lat, lng, onGoBack }: ProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data: categories } = useQuery(CATEGORIES_QUERY);
  const [getDistribuitors, { loading: loadingDistribuitors, data: distribuitors, error: errorDistribuitors }] = useLazyQuery(DISTRIBUTORS_QUERY);
  const [getProducts, { loading: loadingProducts, data: products, error: errorProducts }] = useLazyQuery(PRODUCTS_QUERY);

  const handleChangeItemsCard = (product: ProductType, value: number) => onChangeProductCard(product, value);

  const handleGetProducts = (id: string, search: string, categoryId: string | null) => {
    const queryVariables = {
      id,
      search,
      categoryId,
    };
    getProducts({ variables: queryVariables });
  };

  const handleChangeSearch = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const firstDistribuitor = distribuitors?.pocSearch[0];
    const {
      target: { value },
    } = event;
    if (!value) {
      return handleGetProducts(firstDistribuitor.id, value || '', selectedCategory || null);
    }
    handleGetProducts(firstDistribuitor.id, value, null);
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
      long: lng,
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

  const EmptyState = ({ children }) => {
    return (
      <EmptyTitle>
        :( <br />
        {children}
        <br />
        <br />
        <ContainerButton>
          <Button type="button" onClick={onGoBack}>
            Buscar em outra região
          </Button>
        </ContainerButton>
      </EmptyTitle>
    );
  };

  const isEmptyProducts = products?.poc.products.length === 0 || errorProducts;

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

  if (distribuitors?.pocSearch?.length === 0 || errorDistribuitors) {
    return (
      <Section>
        <EmptyState>Desculpe, não encontramos distribuidores na sua região</EmptyState>
      </Section>
    );
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
            categories.allCategory.map((category, i) => (
              <CategoryContainer key={category.id}>
                <ButtonCard
                  testId={`button-card-${i}`}
                  id={category.id}
                  title={category.title}
                  isSelected={category.id === selectedCategory}
                  onClick={handleClickCategory}
                />
              </CategoryContainer>
            ))}
        </CategoriesButtonsContainer>
        {loadingProducts && (
          <EmptyContainer>
            <BasicLoading size={30} />
          </EmptyContainer>
        )}
        {isEmptyProducts && (
          <EmptyContainer>
            <EmptyState>Não foram encontrados produtos disponíveis</EmptyState>
          </EmptyContainer>
        )}
        <ProductListContainer>
          {products?.poc.products.map((product) => (
            <ProductContainer key={product.id}>
              <CardProduct
                onChange={(value) => handleChangeItemsCard(product, value)}
                value={bagProducts.find((item) => item.id === product.id)?.value || 0}
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
