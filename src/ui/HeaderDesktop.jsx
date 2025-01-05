import Cart from "../features/shoppingCart/Cart";
import HeaderLogo from "./headerUi/HeaderLogo";
import HeaderMenu from "./headerUi/HeaderMenu";
import LoginLink from "./headerUi/LoginLink";

function HeaderDesktop() {
  return (
    <header className="fixed top-9 left-0 right-0 hidden md:flex items-center md:w-[98%] h-16 lg:h-20 md:px-5 lg:px-10 py-5 mx-auto bg-black/60 rounded-3xl backdrop-blur-[8px] z-50">
      <div className="flex justify-between w-full h-14">
        {/* <!-- logo & menu --> */}
        <nav className="flex items-center h-full">
          <HeaderLogo />
          <HeaderMenu />
        </nav>

        {/* <!-- cart & theme toggle & login link --> */}
        <div className="flex md:gap-x-4 lg:gap-x-7 xl:gap-x-10 items-center text-gray-100 md:text-xl lg:text-2xl">
          {/* <!-- cart icon  --> */}
          <div className="flex md:gap-x-4 lg:gap-x-5">
            <Cart />
          </div>
          <span className="w-px h-14 bg-white/20"></span>
          {/* <!-- login link --> */}
          <LoginLink />
        </div>
      </div>
    </header>
  );
}

export default HeaderDesktop;
