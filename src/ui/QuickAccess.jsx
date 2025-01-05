import { Link } from "react-router-dom";

function QuickAccess({ link, children }) {
  return (
    <Link
      to={link}
      className="flex justify-start items-center gap-x-2 md:gap-x-3 text-base md:text-xl text-nowrap"
    >
      <span className="inline-block w-2 md:w-2.5 h-1 bg-gray-300 rounded-full">
        {" "}
      </span>
      {children}
    </Link>
  );
}

export default QuickAccess;
