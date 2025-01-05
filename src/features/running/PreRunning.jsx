import { useAos } from "../../hooks/useAos";
import SectionHeader from "../../ui/SectionHeader";
import SwiperComponent from "../../ui/SwiperComponent";
import { useRunning } from "./useRunning";

function PreRunning() {
  const { running, isLoading } = useRunning();
  useAos();

  if (running?.length > 0)
    return (
      <section className="container w-full my-5 lg:my-10" data-aos="fade-up">
        {/* Section Head */}
        <SectionHeader
          title="کفش های رانینگ"
          subtitle="راحت ترین و مدرن ترین"
          link="/running"
        />
        {/* products */}
        <SwiperComponent sportShoes={running ? running : []} />
      </section>
    );
}

export default PreRunning;
