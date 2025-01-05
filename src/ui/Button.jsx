import { Link } from "react-router-dom";

function Button({
  onClick = null,
  children,
  type = null,
  link = null,
  disabled = false,
}) {
  if (type === "link")
    return (
      <Link
        to={link}
        className="font-ShabnamBold w-full flex justify-center items-center p-2 xl:p-3.5 text-base md:text-lg lg:text-xl text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
      >
        {children}
      </Link>
    );
  return (
    <button
      className="font-ShabnamBold w-full flex justify-center items-center p-2 xl:p-3.5 text-base md:text-lg lg:text-xl text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
