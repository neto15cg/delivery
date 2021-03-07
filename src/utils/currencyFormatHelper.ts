interface Config {
  currency?: string;
  style?: string;
}

const defaultConfig: Config = {
  currency: 'BRL',
  style: 'currency',
};

export const currencyFormatter = (value: number = 0, config: Config = defaultConfig) => {
  const { currency, style } = config;
  const currentValue = !Number(value) ? 0 : value;
  return new Intl.NumberFormat('pt-BR', {
    style,
    currency,
  }).format(currentValue);
};

export const currencyFormatterWithoutPrefix = (value) => currencyFormatter(value).replace(/(\s|R\$)/g, '');
