import { useSearchParams } from "react-router-dom";

function NameModelStyles({
  data,
  currentStyle,
  handleChangeStyle,
  hiddenStyle,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={`flex-col xl:gap-y-4 mt-2 mb-4 ${hiddenStyle}`}>
      <h2 className="font-ShabnamBold text-lg md:text-xl lg:text-2xl xl:text-4xl text-zinc-700 mb-2">
        {data.name}
      </h2>
      <div className="mb-2">
        <h4 className="font-ShabnamLight text-base md:text-lg lg:text-xl text-zinc-700 mb-2">
          {data.model}
        </h4>
        <h5 className="font-ShabnamLight text-base md:text-lg lg:text-xl text-zinc-700 mb-2">
          استایل: {currentStyle}
        </h5>
      </div>
      {/* styles images */}
      <div className="flex gap-x-2 ">
        {data.styles.map((cur, i) => (
          <img
            src={`.${cur.images}-poster.png`}
            alt={cur.style}
            key={cur.style}
            data-style={cur.style}
            className={`w-16 md:w-20 xl:w-24 rounded-2xl shadow-xl cursor-pointer transition-all ${
              cur.style === searchParams.get("style")
                ? "border-4 border-black"
                : "border-4 border-black/10"
            }`}
            onClick={handleChangeStyle}
          />
        ))}
      </div>
    </div>
  );
}

export default NameModelStyles;
