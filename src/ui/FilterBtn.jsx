import { BiFilter } from "react-icons/bi";

function FilterBtn({ isShowFilter, handleShowFilter }) {
  return (
    <nav className="flex items-center gap-x-6 -mb-2.5 md:mt-1 lg:mt-1.5 h-10 pl-1 text-sm md:text-base lg:text-xl tracking-tightest text-zinc-700   rounded-full">
      <button
        className={`${
          isShowFilter ? "text-black" : ""
        } flex items-center gap-x-1 hover:text-black text-base md:text-lg lg:text-2xl font-ShabnamLight`}
        type="button"
        onClick={handleShowFilter}
      >
        <span>فیلترها</span>
        <BiFilter className="size-5 md:size-8" />
      </button>
    </nav>
  );
}

export default FilterBtn;
