import { FaXmark } from "react-icons/fa6";
import CartHeader from "./CartHeader";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import { createPortal } from "react-dom";
import Overlay from "../../ui/Overlay";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useExtractShoppingCart } from "./useExtractShoppingCart";
import { useEffect } from "react";

function CartMobile({ isShowCart, handleShowCart }) {
  const { idUser, isAuthenticated } = useAuth();
  const { arrShop, isLoading: isLoadingShop } = useExtractShoppingCart(idUser);

  return createPortal(
    <div
      className={`cart w-64 flex flex-col fixed top-0 bottom-0 max-h-screen ${
        isShowCart ? "left-0 " : "-left-64"
      } z-[80] pt-5 px-4 bg-white transition-all duration-700 md:hidden`}
    >
      {arrShop?.length > 0 && isAuthenticated ? (
        <>
          {/* head cart */}
          <div className="flex items-center justify-between pb-5 border-b-2">
            <div className="">
              <FaXmark
                className="size-5 text-black cursor-pointer"
                onClick={handleShowCart}
              />
            </div>
            <CartHeader
              shoppingCart={
                isAuthenticated && arrShop?.length > 0 ? arrShop : []
              }
            />
          </div>
          {/* body cart */}
          <div className="scrollable-content flex-grow overflow-y-auto ">
            <CartBody
              shoppingCart={
                isAuthenticated && arrShop?.length > 0 ? arrShop : []
              }
            />
          </div>
          {/* footer cart */}
          <div className="flex justify-center mt-auto py-4 border-t border-gray-300 ">
            <CartFooter
              shoppingCart={
                isAuthenticated && arrShop?.length > 0 ? arrShop : []
              }
            />
          </div>
        </>
      ) : (
        <div>
          <div className="flex justify-between border-b-2 pb-4">
            <FaXmark
              className="size-5 text-black cursor-pointer"
              onClick={handleShowCart}
            />
            <span className="text-base font-ShabnamBold">سبد خرید</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2 font-ShabnamLight md:text-lg">
            <div>
              <img
                className="w-24 md:w-20 lg:w-24 xl:w-28 inline-block"
                src="../images/svgs/empty-cart.svg"
                alt="empty-cart"
              />
            </div>
            <span>سبد خرید شما خالی است.</span>
            <div onClick={handleShowCart}>
              <NavLink
                to="/"
                className=" flex justify-center font-ShabnamLight text-sm lg:text-lg p-2 lg:px-5 lg:py-2 text-white bg-black rounded-full border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
              >
                بازگشت به صفحه اصلی
              </NavLink>
            </div>
          </div>
        </div>
      )}
      {isShowCart && <Overlay onClick={handleShowCart} />}
    </div>,
    document.body
  );
}

export default CartMobile;
