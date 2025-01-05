import { useEffect } from "react";
import SectionDescription from "../ui/SectionDescription";
import SectionSubtitle from "../ui/SectionSubtitle";
import SectionTitle from "../ui/SectionTitle";
import { useScrollTop } from "../hooks/useScrollTop";

const aboutUs = [
  {
    id: 1,
    title: "تاریخچه شروع",
    explain:
      "ماجرای SPORT SHOES از یک علاقه ساده به کفش های ورزشی و سبک زندگی فعال آغاز شد. بنیانگذاران ما، که خود ورزشکاران حرفه ای بودند، همیشه به دنبال بهترین و با کیفیت ترین کفش های ورزشی بودند. این علاقه به مرور زمان به ایده ای برای تاسیس یک فروشگاه آنلاین تخصصی کفش های نایک در سال 1398 تبدیل شد.",
  },
  {
    id: 2,
    title: "هدف",
    explain:
      "هدف ما در SPORT SHOES، ارائه بهترین و با کیفیت ترین کفش های ورزشی نایک به ورزشکاران و علاقه مندان به مد است. ما می خواهیم به مشتریان خود کمک کنیم تا بهترین عملکرد را داشته باشند و در عین حال، استایلی شیک و مدرن داشته باشند.",
  },
  {
    id: 3,
    title: "اعضای تیم",
    explain:
      "تیم SPORT SHOES متشکل از افراد متخصص و با تجربه در زمینه ورزش، مد، و تجارت الکترونیک است. ما با اشتیاق و دانش خود، همواره به دنبال بهترین و مدرن ترین محصولات برای شما هستیم.",
  },
  {
    id: 4,
    title: "آینده",
    explain:
      "چشم انداز ما تبدیل شدن به بزرگترین و معتبرترین فروشگاه آنلاین کفش های ورزشی نایک در کشور است. ما میخواهیم به یک مرجع کامل برای خرید کفش های ورزشی تبدیل شویم و رضایت کامل مشتریان خود را جلب کنیم.",
  },
];
const originality = [
  {
    id: 10,
    title: "ضمانت اصالت",
    explain:
      "در SPORT SHOES، ما به اصالت محصولات خود افتخار می کنیم. تمام محصولات به صورت مستقیم از نمایندگی های رسمی نایک وارد می شود و دارای ضمانت اصالت است.",
  },
  {
    id: 11,
    title: "تشخیص کالاهای اصل",
    explain:
      "برای اطمینان از اصالت محصولات، ما به شما آموزش می دهیم که چگونه با بررسی جعبه، برچسب و سایر مشخصات، اصالت کفش های نایک را تشخیص دهید.",
  },
  {
    id: 12,
    title: "همکاری با برند نایک",
    explain:
      "ما به عنوان یک واردکننده رسمی نایک، به طور مستقیم با این برند همکاری می کنیم و مستقیما بدون واسطه از جدیدترین محصولات آن ها بر خوردار هستیم.",
  },
];
const reasons = [
  {
    id: 20,
    title: "کیفیت",
    explain:
      "در SPORT SHOES، ما به کیفیت خود به اندازه شما اهمیت می دهیم. تمامی کفش های نایک که در فروشگاه ما عرضه می شود، از بهترین متریال و با استفاده از جدیدترین فناوری تولید شده اند تا دوام و راحتی شما را تضمین کنند.",
  },
  {
    id: 21,
    title: "تنوع",
    explain:
      "در SPORT SHOES، شما می توانید انواع مدل های کفش های ورزشی نایک را برای هر نوع فعالیت ورزشی پیدا کنید. با تنوع بالای سایز و رنگ، شما می توانید کفش های مورد نظر خود را با دقیق ترین اندازه و رنگ دلخواه پیدا کنید. ",
  },
  {
    id: 22,
    title: "قیمت",
    explain:
      "ما در SPORT SHOES تلاش می کنیم تا بهترین قیمت ها را برای محصولات خود ارائه دهیم بدون اینکه از کیفیت آنها کم کنیم. ما به طور مرتب تخفیف های ویژه و جشنواره فروش برگذار می کنیم تا شما بتوانید کفش های مورد علاقه ی خود را بخرید.",
  },
  {
    id: 23,
    title: "خدمات پس از فروش",
    explain:
      "تمامی محصولات ما دارای ضمانت اصالت و تعویض هستند. در صورتی که محصولی که خریداری کرده اید دارای نقص باشد، شما می توانید آن را تعویض کنید و همچنین تیم پشتیبانی ما، آماده پاسخگویی به سوالات شما در هر ساعت از شبانه روز هستند.",
  },
];

function AboutUs() {
  useScrollTop();

  return (
    <section className="container w-full relative my-5 lg:my-10 text-zinc-700 rounded-2xl ">
      <div className="w-full flex flex-col gap-y-10">
        {/* about */}
        <div>
          {/* header */}
          <div className="mb-2 md:mb-4">
            <SectionTitle>درباره ما</SectionTitle>
            <SectionSubtitle>تیم SPORT SHOES</SectionSubtitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {aboutUs.map((cur, i) => (
              <SectionDescription
                title={cur.title}
                description={cur.explain}
                translate={i % 2 != 0}
                key={i}
              />
            ))}
          </div>
        </div>

        {/* orginality */}
        <div>
          {/* header */}
          <div className="mb-2 md:mb-4">
            <SectionTitle>اصالت کالاها</SectionTitle>
            <SectionSubtitle>تیم SPORT SHOES</SectionSubtitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {originality.map((cur, i) => (
              <SectionDescription
                title={cur.title}
                description={cur.explain}
                translate={false}
                key={i}
              />
            ))}
          </div>
        </div>

        {/* reasons */}
        <div>
          {/* header */}
          <div className="mb-2 md:mb-4">
            <SectionTitle>دلایل خرید از ما</SectionTitle>
            <SectionSubtitle>تیم SPORT SHOES</SectionSubtitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {reasons.map((cur, i) => (
              <SectionDescription
                title={cur.title}
                description={cur.explain}
                translate={i % 2 != 0}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
