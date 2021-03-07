import React, { useEffect, useState } from 'react';
import Footer from '@container/Footer/Footer';
import Header from '@container/Header/Header';
import Products from '@container/Products/Products';
import { useHistory } from 'react-router-dom';
import { getUrlParameter } from '@utils/urlParamterHelper';

const ProductsPage = () => {
  const [bagItems, setBagItems] = useState<any>([]);
  const history = useHistory();
  const lat = getUrlParameter('lat');
  const long = getUrlParameter('lng');

  const handleChangeItemBag = (product, value) => {
    const bag = {
      id: product.id,
      value,
    };
    const bagItemFinded = bagItems.find((bagItem) => bagItem.id === product.id);
    if (!bagItemFinded) {
      return setBagItems([...bagItems, bag]);
    }
    const icrementedBag = bagItems.map((bagItem) => {
      if (bagItem.id === product.id) {
        return {
          ...bagItem,
          value,
        };
      }
      return { ...bagItem };
    });
    setBagItems(icrementedBag);
  };

  const handleGoBack = () => history.push('/');

  useEffect(() => {
    if (!lat || !long) {
      return history.push('/');
    }
  }, []);

  return (
    <>
      <Header isProductList bagItems={bagItems} />
      <Products onChangeItemCard={handleChangeItemBag} bagItems={bagItems} lat={lat} long={long} onGoBack={handleGoBack} />
      <Footer />
    </>
  );
};

export default ProductsPage;
