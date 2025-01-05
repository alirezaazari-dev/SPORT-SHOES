import PercentOff from "../../ui/PercentOff";
import ChangeAmount from "./ChangeAmount";
import {
  addCommas,
  changeEnToFaNumber,
} from "../../services/changeDigitsNumber";

function ProductShoppingCart({ product }) {
  return (
    <div className="flex flex-col py-2 lg:py-4">
      {/* top */}
      <div className="flex gap-x-2 mb-2">
        {/* image */}
        <div className="relative">
          <img
            src={`${product.selectedStyle.images}-poster.png`}
            alt={product.name}
            className="w-36 lg:w-50 rounded-2xl"
          />
          {product.off !== 0 && <PercentOff product={product} />}
        </div>
        {/* detail */}
        <div className="flex flex-col justify-evenly">
          <h2 className="font-ShabnamBold">{product.name}</h2>
          <h4 className="font-ShabnamLight">{product.model}</h4>
          <h5>استایل: {product.selectedStyle.style}</h5>
          <span>سایز: {changeEnToFaNumber(product.selectedSize)}</span>
        </div>
      </div>
      {/* bottom */}
      <div className="flex w-full justify-between items-center">
        {/* change amount */}
        <div className="w-full">
          <ChangeAmount product={product} />
        </div>
        {/* price */}
        <div className="flex flex-col w-full items-end">
          {product.off !== 0 && (
            <div className="offer">
              <span className="font-ShabnamBold">
                {addCommas(changeEnToFaNumber(product.price)) + " "}
              </span>
              <span className="">{product.unit}</span>
            </div>
          )}
          <div className="">
            <span className="font-ShabnamBold">
              {addCommas(
                changeEnToFaNumber(product.price * ((100 - product.off) / 100))
              ) + " "}
            </span>
            <span className="">{product.unit}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShoppingCart;
