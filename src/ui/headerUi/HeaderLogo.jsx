import { Link } from "react-router-dom";

function HeaderLogo() {
  return (
    <div className="md:pl-5 lg:pl-7 xl:pl-9 shrink-0">
      <Link to="/">
        <img
          src="../images/logoWhite.png"
          alt="Sport Shoes"
          className="w-40 h-9 lg:w-48 lg:h-11"
        />
      </Link>
    </div>
  );
}

export default HeaderLogo;
