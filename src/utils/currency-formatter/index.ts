export const currencyFormatter = (value: number | bigint): string => {
  const formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
  });
  return formatter.format(value);
};

export default currencyFormatter;
