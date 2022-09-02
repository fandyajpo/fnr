export const ConvertTo = (currency, s, c, value) => {
  const cnvrt = new Intl.NumberFormat(currency, {
    style: s,
    currency: c,
  }).format(`${value}`);

  return cnvrt;
};

export function trimSpace(key) {
  const iceCream = key.toLowerCase();
  return iceCream.replace(/\s+/g, "");
}

// en-US
// currency
// USD
