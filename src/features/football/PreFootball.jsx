import { useAos } from "../../hooks/useAos";
import SectionHeader from "../../ui/SectionHeader";
import SwiperComponent from "../../ui/SwiperComponent";
import { useFootball } from "./useFootball";

function PreFootball() {
  const { football, isLoading } = useFootball();
  useAos();

  if (football?.length > 0)
    return (
      <section className="container w-full my-5 lg:my-10" data-aos="fade-up">
        {/* Section Head */}
        <SectionHeader
          title="کفش های فوتبال"
          subtitle="با کیفیت ترین و خاص ترین"
          link="/football"
        />
        {/* products */}
        <SwiperComponent sportShoes={football ? football : []} />
      </section>
    );
}

export default PreFootball;
