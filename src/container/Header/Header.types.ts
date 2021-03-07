import { BagProductType } from '@container/Products/Products.types';

export interface HeaderProps {
  isProductList?: boolean;
  bagProducts?: BagProductType[];
  onGoBack?: () => void;
}
