import { useAos } from "../../hooks/useAos";
import SectionHeader from "../../ui/SectionHeader";
import SwiperComponent from "../../ui/SwiperComponent";
import { useBasketball } from "./useBasketball";

function PreBasketball() {
  const { basketball, isLoading } = useBasketball();
  useAos();

  if (basketball?.length > 0)
    return (
      <section className="container w-full my-5 lg:my-10" data-aos="fade-up">
        {/* Section Head */}
        <SectionHeader
          title="کفش های بسکتبال"
          subtitle="جدیدترین و زیباترین"
          link="/basketball"
        />
        {/* products */}
        <SwiperComponent sportShoes={basketball ? basketball : []} />
      </section>
    );
}

export default PreBasketball;
