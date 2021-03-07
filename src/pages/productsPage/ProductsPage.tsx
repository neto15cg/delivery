import React, { useState } from 'react';
import Footer from '@container/Footer/Footer';
import Header from '@container/Header/Header';
import Products from '@container/Products/Products';

const ProductsPage = () => {
  const [bagItems, setBagItems] = useState<any>([]);

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

  return (
    <>
      <Header isProductList bagItems={bagItems} />
      <Products onChangeItemCard={handleChangeItemBag} bagItems={bagItems} />
      <Footer />
    </>
  );
};

export default ProductsPage;
