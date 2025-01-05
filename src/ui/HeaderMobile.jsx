import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import CartIcon from "../features/shoppingCart/CartIcon";

import { useEffect, useState } from "react";
import NavbarMobile from "./NavbarMobile";
import CartMobile from "../features/shoppingCart/CartMobile";
import FormSearch from "./FormSearch";
import { useAuth } from "../context/AuthContext";
import { useExtractShoppingCart } from "../features/shoppingCart/useExtractShoppingCart";

function HeaderMobile() {
  const { idUser, isAuthenticated } = useAuth();
  const { arrShop, isLoading: isLoadingShop } = useExtractShoppingCart(idUser);

  const location = useLocation();
  const [isShowNavbar, setIsShowNavbar] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  const [isShowCategory, setIsShowCategory] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShouldRender(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleShowNavbar() {
    setIsShowNavbar((cur) => !cur);
    setIsShowCategory(() => false);
    if (isShowCart) setIsShowCart(false);
  }

  function handleShowCart() {
    if (
      location.pathname !== "/shopping-cart" &&
      location.pathname !== "/payment"
    ) {
      setIsShowCart((cur) => !cur);
      if (isShowNavbar) setIsShowNavbar(false);
    }
  }

  function handleShowCategory() {
    setIsShowCategory((cur) => !cur);
  }

  useEffect(() => {
    setIsShowNavbar(false);
    setIsShowCart(false);
    setIsShowCategory(false);
  }, [location.pathname, shouldRender]);

  useEffect(() => {
    if (isShowCart || isShowNavbar) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isShowCart, isShowNavbar]);

  if (shouldRender)
    return (
      <header className="flex justify-between items-center md:hidden h-16 px-4 bg-black shadow-xl sticky inset-x-0 top-0 z-30">
        {/* <!-- bar icon --> */}
        <div className="open-nav-btn" onClick={handleShowNavbar}>
          <FaBars className="size-5 text-white cursor-pointer" />
        </div>
        {/* <!-- nav --> */}
        <NavbarMobile
          isShowNavbar={isShowNavbar}
          isShowCategory={isShowCategory}
          handleShowNavbar={handleShowNavbar}
          handleShowCategory={handleShowCategory}
          shoppingCart={isAuthenticated && arrShop?.length > 0 ? arrShop : []}
        />
        {/* <!-- logo type --> */}
        <div>
          <img
            src="../images/logoWhite.png"
            alt="Sport-Shoes-Logo"
            className="w-48"
          />
        </div>
        {/* <!-- cart icon --> */}
        <div onClick={handleShowCart} className="text-white">
          <CartIcon
            shoppingCart={isAuthenticated && arrShop?.length > 0 ? arrShop : []}
            className="open-cart-btn"
          />
        </div>
        {/* <!-- cart --> */}
        {location.pathname !== "/shopping-cart" &&
          location.pathname !== "/payment" && (
            <CartMobile
              isShowCart={isShowCart}
              handleShowCart={handleShowCart}
            />
          )}
      </header>
    );
}

export default HeaderMobile;
