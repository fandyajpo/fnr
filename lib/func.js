export const ConvertTo = (currency, s, c, value) => {
  const cnvrt = new Intl.NumberFormat(currency, {
    style: s,
    currency: c,
  }).format(`${value}`);

  return cnvrt;
};

// en-US
// currency
// USD
