import { HiMiniChevronLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

function SectionLink({ children, link }) {
  return (
    <Link to={link} className="section-link">
      <span className="inline-block">{children}</span>
      <HiMiniChevronLeft className="size-4 md:size-6 " />
    </Link>
  );
}

export default SectionLink;
