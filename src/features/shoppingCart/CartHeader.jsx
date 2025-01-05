import { HiMiniChevronLeft } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";

function CartHeader({ shoppingCart }) {
  return (
    <div className="flex justify-between gap-x-2 md:gap-x-0 font-ShabnamLight text-base md:text-xl tracking-tightest md:pb-3">
      <span className="text-gray-400/90">
        {changeEnToFaNumber(
          shoppingCart?.reduce((prev, cur) => cur.amount + prev, 0)
        )}{" "}
        مورد
      </span>
      <NavLink
        to="/shopping-cart"
        className="flex items-center text-black md:text-zinc-700 hover:text-black"
      >
        <span>مشاهده سبد خرید</span>
        <HiMiniChevronLeft className="size-6" />
      </NavLink>
    </div>
  );
}

export default CartHeader;
