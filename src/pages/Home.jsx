import Categories from "../features/caregories/Categories";
import PreFootball from "../features/football/PreFootball";
// import FootballBanner from "../features/football/FootballBanner";
import PreRunning from "../features/running/PreRunning";
import RunningBanner from "../features/running/RunningBanner";
import PreBasketball from "../features/basketball/PreBasketball";
import PreFitness from "../features/fitness/PreFitness";
import Parallax from "../ui/Parallax";
import { useScrollTop } from "../hooks/useScrollTop";
import PreOffer from "../features/offerPage/PreOffer";
import PreBlog from "../features/blog/PreBlog";
import Banner from "../features/football/FootballBanner";

function Home() {
  useScrollTop();

  return (
    <div>
      {/* دسته بندی  */}
      <Categories />
      {/* تخفیف دار ها */}
      <PreOffer />
      <Banner
        link="/football"
        text="تکنیک | سرعت | استحکام"
        image="../images/banner/football-banner.png"
      />
      <PreFootball />
      <Banner
        link="/running"
        text="نهایت سرعت!"
        image="../images/banner/running-banner.png"
      />
      <PreRunning />
      <Banner
        link="/basketball"
        text="تجربه ی بلندترین پرواز!"
        image="../images/banner/basketball-banner2.png"
      />
      {/* <Banner
        link="/basketball"
        text="تجربه ی بلندترین پرش"
        image="../images/gif/basketball.gif"
      /> */}
      <PreBasketball />
      <Banner
        link="/fitness"
        text="بدون محدودیت!"
        image="../images/banner/fitness-banner.png"
      />
      <PreFitness />
      <PreBlog />
    </div>
  );
}

export default Home;
