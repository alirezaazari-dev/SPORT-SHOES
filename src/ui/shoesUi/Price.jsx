import {
  changeEnToFaNumber,
  addCommas,
} from "../../services/changeDigitsNumber";

function Price({ data }) {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-x-2 md:gap-x-2.5">
        {data.off !== 0 && (
          <div className="offer">
            <span className="font-ShabnamBold text-lg md:text-xl lg:text-2xl">
              {addCommas(changeEnToFaNumber(data.price)) + " "}
            </span>
            <span className="text-lg md:text-xl lg:text-2xl tracking-tighter">
              {data.unit}
            </span>
          </div>
        )}
        <div className="">
          <span className="font-ShabnamBold text-lg md:text-xl lg:text-2xl">
            {addCommas(
              changeEnToFaNumber(data.price * ((100 - data.off) / 100))
            ) + " "}
          </span>
          <span className="text-lg md:text-xl lg:text-2xl tracking-tighter">
            {data.unit}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Price;
