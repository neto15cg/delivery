export interface BagProductType {
  id: string;
  value: number;
}

interface ImageType {
  url: string;
}

interface ProductVariantType {
  availableDate: string;
  description: null;
  inventoryItemId: string;
  price: number;
  productVariantId: string;
  published: string;
  shortDescription: string;
  subTitle: string;
  title: string;
  volume: string;
  valumeUnit: string;
}
export interface ProductType {
  id: string;
  images: ImageType[];
  title: string;
  rgb: boolean;
  productVariants: ProductVariantType[];
}

export interface ProductsProps {
  bagProducts: BagProductType[];
  onChangeProductCard: (product: ProductType, value: number) => void;
  lat: number | string;
  lng: number | string;
  onGoBack: () => void;
}
