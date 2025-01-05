import { useRecommended } from "../../pages/useRecommended";
import SectionSubtitle from "../SectionSubtitle";
import SectionTitle from "../SectionTitle";
import SwiperComponent from "../SwiperComponent";

function RecommendedProduct({ data }) {
  const { recommended, isLoading } = useRecommended(
    data?.category,
    data?.productId
  );

  return (
    <section className="container w-full relative my-5 lg:my-10 py-5 text-zinc-700 bg-white rounded-2xl transition-all overflow-hidden shadow-2xl">
      <div className="w-full">
        {/* Section Head */}
        <div className="mb-2 md:mb-4">
          <SectionTitle>محصولات پیشنهادی ما</SectionTitle>
          <SectionSubtitle>ممکن است بپسندید</SectionSubtitle>
        </div>
        {/* products */}
        <SwiperComponent sportShoes={recommended ? recommended : []} />
      </div>
    </section>
  );
}

export default RecommendedProduct;
