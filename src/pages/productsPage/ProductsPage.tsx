import React, { useEffect, useState } from 'react';
import Footer from '@containers/Footer/Footer';
import Header from '@containers/Header/Header';
import Products from '@containers/Products/Products';
import { useHistory, useLocation } from 'react-router-dom';
import { getUrlParameter } from '@utils/urlParamterHelper';
import { BagProductType, ProductType } from '@containers/Products/Products.types';

const ProductsPage = () => {
  const [bagProducts, setBagProducts] = useState<BagProductType[]>([]);
  const history = useHistory();
  const { search } = useLocation();
  const lat = getUrlParameter('lat', search);
  const long = getUrlParameter('lng', search);

  const handleChangeProductBag = (product: ProductType, value: number) => {
    const bag = {
      id: product.id,
      value,
    };
    const bagProductFinded = bagProducts.find((bagProduct) => bagProduct.id === product.id);
    if (!bagProductFinded) {
      return setBagProducts([...bagProducts, bag]);
    }
    const icrementedBag = bagProducts.map((bagProduct) => {
      if (bagProduct.id === product.id) {
        return {
          ...bagProduct,
          value,
        };
      }
      return { ...bagProduct };
    });
    setBagProducts(icrementedBag);
  };

  const handleGoBack = () => history.push('/');

  useEffect(() => {
    if (!lat || !long) {
      return history.push('/');
    }
  }, []);

  return (
    <>
      <Header isProductList bagProducts={bagProducts} onGoBack={handleGoBack} />
      <Products onChangeProductCard={handleChangeProductBag} bagProducts={bagProducts} lat={lat} lng={long} onGoBack={handleGoBack} />
      <Footer />
    </>
  );
};

export default ProductsPage;
