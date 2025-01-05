import HeaderMobile from "./HeaderMobile";
import SubHeader from "./SubHeader";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  return (
    <>
      {/* header Desktop */}
      <HeaderDesktop />
      {/* header mobile */}
      <HeaderMobile />
      {/* sub header */}
      <SubHeader />
    </>
  );
}

export default Header;
