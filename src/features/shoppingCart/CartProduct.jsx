import ChangeAmount from "./ChangeAmount";
import {
  addCommas,
  changeEnToFaNumber,
} from "../../services/changeDigitsNumber";

function CartProduct({ product }) {
  return (
    <div className="flex flex-col items-center text-zinc-700 mb-2">
      <div className="flex flex-col gap-y-1 md:gap-y-0 md:flex-row gap-x-1 py-1 md:py-3 ml-2">
        {/* image */}
        <div className="relative">
          <img
            src={`.${product.selectedStyle.images}-poster.png`}
            alt={product.name}
            className="w-full md:w-28 md:h-28 rounded-2xl shadow-normal"
          />
          {product.off > 0 && (
            <span className="absolute flex items-center justify-center top-1.5 right-1.5 px-1.5 pt-1 md:pt-0.5 text-sm tracking-tightest text-white bg-red-600/90 rounded-xl">
              {changeEnToFaNumber(product.off)}%
            </span>
          )}
        </div>
        {/* detail */}
        <div className="flex flex-col justify-evenly">
          <div className="flex flex-col">
            <h4 className="font-ShabnamBold text-sm md:text-lg text-zinc-700 line-clamp-1">
              {product.name}
            </h4>
            <span className="text-sm md:text-lg">
              سایز: {changeEnToFaNumber(product.selectedSize)}
            </span>
            <span className="text-sm md:text-lg">
              استایل: {product.selectedStyle.style}
            </span>
          </div>
          <div>
            {product.off > 0 && (
              <div className="offer inline-block">
                <span className="font-ShabnamBold text-sm md:text-lg">
                  {addCommas(changeEnToFaNumber(product.price)) + " "}
                </span>
                <span className="font-Shabnam text-sm">{product.unit}</span>
              </div>
            )}
            <div className={`text-zinc-700 ${product.off > 0 && "-mt-2"}`}>
              {/* <span>{product.amount} * </span> */}
              <span className="font-ShabnamBold text-sm md:text-lg">
                {addCommas(
                  changeEnToFaNumber(
                    product.price * ((100 - product.off) / 100)
                  )
                ) + " "}
              </span>
              <span className="font-Shabnam text-sm">{product.unit}</span>
            </div>
          </div>
        </div>
      </div>
      {/* change amount */}
      <div className="px-1 w-full">
        <ChangeAmount product={product} />
      </div>
    </div>
  );
}

export default CartProduct;
