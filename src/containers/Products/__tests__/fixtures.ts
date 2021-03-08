import { CATEGORIES_QUERY, DISTRIBUTORS_QUERY, PRODUCTS_QUERY } from '@services/products';
import { format } from 'date-fns';

export const CategoriesMock = {
  data: {
    allCategory: [
      {
        title: 'Cervejas',
        id: '94',
      },
      {
        title: 'Vinhos',
        id: '92',
      },
    ],
  },
};

export const ProductListMock = {
  data: {
    poc: {
      id: '532',
      products: [
        {
          id: '8868',
          title: 'Skol 269ml - Unidade',
          rgb: false,
          images: [
            {
              url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg',
            },
          ],
          productVariants: [
            {
              availableDate: '2018-10-31T00:00:00',
              productVariantId: '8502',
              price: 2.09,
              inventoryItemId: '80149',
              shortDescription: null,
              title: 'Skol 269ml - Unidade',
              published: null,
              volume: '0,00269',
              volumeUnit: null,
              description: null,
              subtitle: 'Cervejas',
              components: [],
            },
          ],
        },
        {
          id: '8868',
          title: 'Budweiser 350ml',
          rgb: false,
          images: [
            {
              url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/8868_205f958d-2e51-48a3-b4d5-a2998765571a.jpg',
            },
          ],
          productVariants: [
            {
              availableDate: '2018-10-31T00:00:00',
              productVariantId: '8502',
              price: 2.09,
              inventoryItemId: '80149',
              shortDescription: null,
              title: 'Skol 269ml - Unidade',
              published: null,
              volume: '0,00269',
              volumeUnit: null,
              description: null,
              subtitle: 'Cervejas',
              components: [],
            },
          ],
        },
        {
          id: '9537',
          title: 'Vinho Chileno Tinto Seco Merlot Garrafa 750ml',
          rgb: false,
          images: [
            {
              url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009537_f9ba8b41-3e7d-4d68-b8bd-eec7d1d63d5d.jpg',
            },
          ],
          productVariants: [
            {
              availableDate: '2018-10-31T00:00:00',
              productVariantId: '9171',
              price: 54.9,
              inventoryItemId: '80297',
              shortDescription: '',
              title: 'Vinho Chileno Tinto Seco Merlot Garrafa 750ml',
              published: null,
              volume: '0,0075',
              volumeUnit: null,
              description: '',
              subtitle: 'Vinhos',
              components: [],
            },
          ],
        },
      ],
    },
  },
};

export const ProductListMockSearched = {
  data: {
    poc: {
      id: '532',
      products: [
        {
          id: '89462',
          title: 'Budweiser Cerveja Boa',
          rgb: false,
          images: [
            {
              url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00008946_df1f1e8c-3207-48fe-9d75-6894b11030c3.jpg',
            },
          ],
          productVariants: [
            {
              availableDate: '2018-10-31T00:00:00',
              productVariantId: '8580',
              price: 44.28,
              inventoryItemId: '80159',
              shortDescription: null,
              title: 'Budweiser 350ml - Caixa com 12 Unidades',
              published: null,
              volume: '0,042',
              volumeUnit: null,
              description: null,
              subtitle: 'Cervejas',
              components: [],
            },
          ],
        },
      ],
    },
  },
};

export const ProductListMockSearchedByCategory = {
  data: {
    poc: {
      id: '532',
      products: [
        {
          id: '9537',
          title: 'Vinho Chileno Tinto Seco Merlot Garrafa 750ml',
          rgb: false,
          images: [
            {
              url: 'https://courier-images-codechallenge.s3-us-west-2.amazonaws.com/product/00009537_f9ba8b41-3e7d-4d68-b8bd-eec7d1d63d5d.jpg',
            },
          ],
          productVariants: [
            {
              availableDate: '2018-10-31T00:00:00',
              productVariantId: '9171',
              price: 54.9,
              inventoryItemId: '80297',
              shortDescription: '',
              title: 'Vinho Chileno Tinto Seco Merlot Garrafa 750ml',
              published: null,
              volume: '0,0075',
              volumeUnit: null,
              description: '',
              subtitle: 'Vinhos',
              components: [],
            },
          ],
        },
      ],
    },
  },
};

export const DistribuitorsMock = {
  data: {
    pocSearch: [
      {
        __typename: 'POC',
        id: '532',
        status: 'AVAILABLE',
        tradingName: 'Distribuidor de Treinamento',
        officialName: 'Distribuidor de Treinamento',
        deliveryTypes: [
          {
            __typename: 'POCDeliveryType',
            pocDeliveryTypeId: '1284',
            deliveryTypeId: '16',
            price: null,
            title: 'RECEBER',
            subtitle: 'em até uma hora',
            active: true,
          },
        ],
        paymentMethods: [
          {
            __typename: 'POCPaymentMethod',
            pocPaymentMethodId: '1292',
            paymentMethodId: '46',
            active: true,
            title: 'Crédito (Visa/Mastercard)',
            subtitle: 'Cartão de Crédito Visa/Master',
          },
        ],
        pocWorkDay: [
          {
            __typename: 'POCWorkDay',
            weekDay: 6,
            active: true,
            workingInterval: [
              {
                __typename: 'POCWorkingInterval',
                openingTime: '09:55:00',
                closingTime: '23:59:00',
              },
              {
                __typename: 'POCWorkingInterval',
                openingTime: '00:00:00',
                closingTime: '04:00:00',
              },
            ],
          },
        ],
        address: {
          __typename: 'POCAddress',
          address1: 'Rua Américo Brasiliense',
          address2: null,
          number: '1781',
          city: 'São Paulo',
          province: 'SP',
          zip: '01457005',
          coordinates: '{"type": "Point", "coordinates": [-46.703635899999995, -23.6305321]}',
        },
        phone: {
          __typename: 'POCPhone',
          phoneNumber: '1143272169',
        },
      },
    ],
  },
};
