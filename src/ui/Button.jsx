import { Link } from "react-router-dom";

function Button({
  onClick = null,
  children,
  type = null,
  link = null,
  disabled = false,
  color = "primary",
}) {
  if (type === "link")
    return (
      <Link
        to={link}
        className="font-ShabnamBold w-full flex justify-center items-center p-2 md:p-2.5 lg:p-3 text-base md:text-lg lg:text-xl text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0 transition-all"
      >
        {children}
      </Link>
    );
  return (
    <button
      className={`font-ShabnamBold w-full flex justify-center items-center p-2 md:p-2.5 lg:p-3  text-base md:text-lg lg:text-xl transition-all ${
        color === "primary" &&
        "text-white bg-black rounded-2xl border-4 border-black hover:bg-black/60 hover:border-black/0"
      } ${
        color === "secondary" &&
        "text-white bg-red-600/90 rounded-2xl border-4 border-red-600/90 hover:bg-red-600/60 hover:border-red-600/0"
      } `}
      onClick={onClick}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
