import CartProduct from "./CartProduct";

function CartBody({ shoppingCart }) {
  return (
    <div className="md:scrollable-content pb-1 divide-y-4 divide-gray-100 md:border-b md:border-gray-300 pl-2 md:pl-0 md:max-h-[500px] md:overflow-y-scroll">
      {shoppingCart?.map((product, i) => (
        <CartProduct product={product} key={i} />
      ))}
    </div>
  );
}

export default CartBody;
