import { changeEnToFaNumber } from "../services/changeDigitsNumber";

function PercentOff({ product }) {
  return (
    <span className="absolute top-1.5 right-1.5 inline-block px-2.5 md:px-3.5 h-5 md:h-[30px] text-xs/[24px] md:text-base/[34px] text-white bg-red-600/90 rounded-xl">
      {changeEnToFaNumber(product?.off)}%
    </span>
  );
}

export default PercentOff;
