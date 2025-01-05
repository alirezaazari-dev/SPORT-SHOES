import SectionHeader from "../../ui/SectionHeader";
import SwiperComponent from "../../ui/SwiperComponent";
import { useOffer } from "./useOffer";

function PreOffer() {
  const { discountedProducts, isLoading } = useOffer();

  if (discountedProducts?.length > 0)
    return (
      <section className="container w-full my-5 lg:my-10">
        {/* Section Head */}
        <SectionHeader
          title="فروش ویژه"
          subtitle="تجربه بهترین قیمت ها"
          link="/offer"
        />
        {/* products */}
        <SwiperComponent
          sportShoes={discountedProducts ? discountedProducts : []}
        />
      </section>
    );
}

export default PreOffer;
