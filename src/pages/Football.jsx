import { useFootball } from "../features/football/useFootball";
import { useScrollTop } from "../hooks/useScrollTop";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import Slide from "../ui/Slide";
import { useEffect, useRef, useState } from "react";
import Filter from "../ui/Filter";
import FilterMobile from "../ui/FilterMobile";
import { FaRegFrownOpen } from "react-icons/fa";
import FilterBtn from "../ui/FilterBtn";
import Spinner from "../ui/Spinner";
import ProductNotFound from "../ui/ProductNotFound";

function Football() {
  useScrollTop();
  const { football, isLoading } = useFootball();
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  function handleShowFilter() {
    setIsShowFilter((cur) => !cur);
    // setIsShowSort(false);
  }

  useEffect(() => {
    if (filteredData?.length !== football?.length) setFilteredData(football);
  }, [football]);

  if (isLoading) return <Spinner />;
  return (
    <section className="container w-full my-5 lg:my-10 text-zinc-700">
      <div className="flex justify-between items-end mb-2 md:mb-4">
        <div>
          <SectionTitle>کفش های فوتبال</SectionTitle>
          <SectionSubtitle>با کیفیت ترین و خاص ترین</SectionSubtitle>
        </div>
        <FilterBtn
          isShowFilter={isShowFilter}
          handleShowFilter={handleShowFilter}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
        {/* products */}
        <div
          className={`${
            isShowFilter ? " lg:col-span-2" : "lg:grid-cols-3 "
          } grid grid-cols-1 sm:grid-cols-2 col-span-3 gap-2 sm:gap-4 `}
        >
          {filteredData?.length > 0 ? (
            filteredData?.map((shoes) => <Slide shoes={shoes} key={shoes.id} />)
          ) : (
            <ProductNotFound />
          )}
        </div>
        {/* فیلتر */}
        <div className={`${isShowFilter ? "hidden lg:block " : "hidden"}`}>
          <Filter
            data={football}
            setFilteredData={setFilteredData}
            isShowFilter={isShowFilter}
            setIsShowFilter={setIsShowFilter}
          />
        </div>
        <FilterMobile isShowFilter={isShowFilter}>
          <Filter
            data={football}
            setFilteredData={setFilteredData}
            isShowFilter={isShowFilter}
            setIsShowFilter={setIsShowFilter}
          />
        </FilterMobile>
      </div>
    </section>
  );
}

export default Football;
