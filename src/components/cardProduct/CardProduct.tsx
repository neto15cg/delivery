import React from 'react';
import IncrementInput from '@components/incrementInput/IncrementInput';
import { currencyFormatterWithoutPrefix } from '@utils/currencyFormatHelper';
import { CardContainer, CardContent, CardFooter, ImageContainer, InputContainer, InputContent, ValueContent } from './CardProduct.styles';

const CardProduct = ({ onChange, srcImage, description, value, productValue }) => {
  return (
    <CardContainer>
      {srcImage && (
        <ImageContainer>
          <img alt="drink" src={srcImage} width="100px" />
        </ImageContainer>
      )}
      <CardContent>{description}</CardContent>
      <CardFooter>
        <InputContainer>
          <InputContent>
            <IncrementInput onChange={onChange} value={value} minValue={0} />
          </InputContent>
        </InputContainer>
        {productValue && (
          <ValueContent>
            R$ &nbsp;<strong>{currencyFormatterWithoutPrefix(productValue)}</strong>
          </ValueContent>
        )}
      </CardFooter>
    </CardContainer>
  );
};

export default CardProduct;
