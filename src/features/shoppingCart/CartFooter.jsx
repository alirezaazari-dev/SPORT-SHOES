import { Link } from "react-router-dom";
import { calcPrices } from "../../services/calcShoppingCartPrices";
import {
  changeEnToFaNumber,
  addCommas,
} from "../../services/changeDigitsNumber";

function CartFooter({ shoppingCart }) {
  return (
    <div className="flex flex-col items-center gap-y-1 md:gap-y-0 md:flex-row md:justify-between md:pt-4">
      {/* قیمت */}
      <div className="flex flex-col justify-center items-center md:block -mt-0.5 text-zinc-700">
        <span className="text-sm font-ShabnamLight tracking-tighter">
          مبلغ قابل پرداخت
        </span>
        <div className="font-ShabnamBold text-base md:text-lg">
          {addCommas(changeEnToFaNumber(calcPrices(shoppingCart).payable))}
          <span className="font-shabnam text-sm"> تومان</span>
        </div>
      </div>
      {/* رفتن به پرداخت */}
      <Link
        to="/payment"
        className="font-ShabnamBold flex justify-center py-2 px-4 md:p-3.5 text-base md:text-lg text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
      >
        ثبت سفارش
      </Link>
    </div>
  );
}

export default CartFooter;
