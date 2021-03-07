import React, { useEffect, useState } from 'react';
import Footer from '@container/Footer/Footer';
import Header from '@container/Header/Header';
import Products from '@container/Products/Products';
import { useHistory } from 'react-router-dom';
import { getUrlParameter } from '@utils/urlParamterHelper';

const ProductsPage = () => {
  const [bagProducts, setBagProducts] = useState<any>([]);
  const history = useHistory();
  const lat = getUrlParameter('lat');
  const long = getUrlParameter('lng');

  const handleChangeItemBag = (product, value) => {
    const bag = {
      id: product.id,
      value,
    };
    const bagItemFinded = bagProducts.find((bagItem) => bagItem.id === product.id);
    if (!bagItemFinded) {
      return setBagProducts([...bagProducts, bag]);
    }
    const icrementedBag = bagProducts.map((bagItem) => {
      if (bagItem.id === product.id) {
        return {
          ...bagItem,
          value,
        };
      }
      return { ...bagItem };
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
      <Products onChangeItemCard={handleChangeItemBag} bagProducts={bagProducts} lat={lat} lng={long} onGoBack={handleGoBack} />
      <Footer />
    </>
  );
};

export default ProductsPage;
