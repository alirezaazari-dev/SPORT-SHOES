import CartIcon from "./CartIcon";
import CartBody from "./CartBody";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useExtractShoppingCart } from "./useExtractShoppingCart";

function Cart() {
  const { idUser, isAuthenticated } = useAuth();
  const { arrShop, isLoading: isLoadingShop } = useExtractShoppingCart(idUser);
  const location = useLocation();

  return (
    <div className="relative group">
      {/* <!-- cart icon --> */}
      <NavLink to={`${isAuthenticated ? "/shopping-cart" : location.pathname}`}>
        <CartIcon
          shoppingCart={isAuthenticated && arrShop?.length > 0 ? arrShop : []}
        />
      </NavLink>
      {/* cart */}
      {location.pathname !== "/shopping-cart" &&
        location.pathname !== "/payment" && (
          <div className="w-[400px] absolute top-[100%] left-0 p-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all delay-75 bg-white  rounded-2xl border-t-[4px] border-black shadow-2xl text-zinc-700 ">
            {isAuthenticated && arrShop?.length > 0 ? (
              <>
                <CartHeader
                  shoppingCart={
                    isAuthenticated && arrShop?.length > 0 ? arrShop : []
                  }
                />
                <CartBody
                  shoppingCart={
                    isAuthenticated && arrShop?.length > 0 ? arrShop : []
                  }
                />
                <CartFooter
                  shoppingCart={
                    isAuthenticated && arrShop?.length > 0 ? arrShop : []
                  }
                />
              </>
            ) : (
              <div className="flex flex-col justify-center items-center font-ShabnamLight text-lg">
                <div>
                  <img
                    className="md:w-20 lg:w-24 xl:w-28 inline-block"
                    src="../images/svgs/empty-cart.svg"
                    alt="empty-cart"
                  />
                </div>
                <span>سبد خرید شما خالی است.</span>
              </div>
            )}
          </div>
        )}
    </div>
  );
}

export default Cart;
