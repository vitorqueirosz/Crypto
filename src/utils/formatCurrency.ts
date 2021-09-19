export const formatCurrency = (
  locale: string,
  currency: string,
  currencyValue: number,
) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(currencyValue);
};
