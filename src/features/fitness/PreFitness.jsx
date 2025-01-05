import { useAos } from "../../hooks/useAos";
import SectionHeader from "../../ui/SectionHeader";
import SwiperComponent from "../../ui/SwiperComponent";
import { useFitness } from "./useFitness";

function PreFitness() {
  const { fitness, isLoading } = useFitness();
  useAos();

  if (fitness?.length > 0)
    return (
      <section className="container w-full my-5 lg:my-10" data-aos="fade-up">
        {/* Section Head */}
        <SectionHeader
          title="کفش های فیتنس"
          subtitle="محبوب ترین و مناسب ترین"
          link="/fitness"
        />
        {/* products */}
        <SwiperComponent sportShoes={fitness ? fitness : []} />
      </section>
    );
}

export default PreFitness;
