import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CloseSectionProfile() {
  return (
    <div className="flex lg:hidden">
      <Link to={"/profile"}>
        <FaXmark className="size-5 " />
      </Link>
    </div>
  );
}

export default CloseSectionProfile;
