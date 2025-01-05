export function calcPrices(shoppingCart, isCorrectDiscount = false) {
  const totalPrice = shoppingCart?.reduce(
    (prev, cur) => cur.amount * cur.price + prev,
    0
  );
  const payable = isCorrectDiscount
    ? shoppingCart?.reduce(
        (prev, cur) => prev + cur.price * ((100 - cur.off) / 100) * cur.amount,
        0
      ) * 0.95
    : shoppingCart?.reduce(
        (prev, cur) => prev + cur.price * ((100 - cur.off) / 100) * cur.amount,
        0
      );
  const profit = totalPrice - payable;

  return { totalPrice, payable, profit };
}
