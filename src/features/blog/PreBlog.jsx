import { Link } from "react-router-dom";
import SectionHeader from "../../ui/SectionHeader";
import { changeEnToFaNumber } from "../../services/changeDigitsNumber";
import SlideBlog from "../../ui/SlideBlog";
import { useAos } from "../../hooks/useAos";

const blogs = [
  {
    id: "blog-1",
    date: "1403/10/9",
    image: "../images/blogs/blog-1.png",
    title: "نقد و بررسی کفش فوتبال نایک فانتوم: غول کنترل توپ",
    introduction:
      "کفش فوتبال نایک فانتوم یکی از محبوب‌ترین و پرطرفدارترین مدل‌های کفش فوتبال در دنیاست که به خاطر طراحی خاص و عملکرد فوق‌العاده‌اش شناخته می‌شود. سری فانتوم نایک به طور معمول برای بازیکنانی طراحی شده که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. در این بررسی، به ویژگی‌ها، مزایا و معایب این مدل کفش خواهیم پرداخت.",
    parts: [
      {
        title: "ویژگی‌های کلیدی کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "رویه‌ی انعطاف‌پذیر و متناسب با شکل پا:",
            explain:
              "رویه‌ی این کفش معمولاً از جنس‌های نرم و انعطاف‌پذیری مانند Flyknit ساخته شده که باعث می‌شود پا به خوبی در کفش قرار گیرد و احساس راحتی بیشتری داشته باشد.",
          },
          {
            title: "فناوری‌های نوین برای کنترل توپ:",
            explain:
              "نایک در مدل‌های مختلف فانتوم از فناوری‌های مختلفی مانند All Conditions Control (ACC) برای بهبود چسبندگی توپ در هر شرایط آب و هوایی و Nike Gripknit برای افزایش اصطکاک بین پا و توپ استفاده کرده است.",
          },
          {
            title: "پشتیبانی مناسب از مچ پا:",
            explain:
              "بسیاری از مدل‌های فانتوم دارای یقه‌ای بلند هستند که از مچ پا پشتیبانی کرده و باعث می‌شود پا در جای خود محکم شود.",
          },
          {
            title: "پخش نیرو و کاهش فشار روی مفاصل:",
            explain:
              "کف این کفش‌ها به گونه‌ای طراحی شده که نیرو را به طور مساوی پخش کرده و از وارد آمدن فشار بیش از حد به مفاصل جلوگیری کند.",
          },
        ],
      },
      {
        title: "مزایای کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "کنترل توپ فوق‌العاده:",
            explain:
              "این کفش‌ها به دلیل طراحی خاص رویه و فناوری‌های به کار رفته در آن‌ها، کنترل توپ بسیار بالایی را به بازیکن ارائه می‌دهند.",
          },
          {
            title: "راحتی و تناسب بالا:",
            explain:
              "رویه‌ی نرم و انعطاف‌پذیر این کفش‌ها باعث می‌شود پا به خوبی در آن‌ها قرار گیرد و احساس راحتی داشته باشد.",
          },
          {
            title: "ظاهر زیبا و جذاب:",
            explain:
              "طراحی شیک و مدرن این کفش‌ها باعث شده که علاوه بر عملکرد بالا، از نظر ظاهری نیز بسیار جذاب باشند.",
          },
          {
            title: "مناسب برای انواع زمین:",
            explain:
              "بسیاری از مدل‌های فانتوم برای انواع زمین‌های طبیعی و مصنوعی مناسب هستند.",
          },
        ],
      },
      {
        title: "معایب کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "قیمت بالا:",
            explain:
              "به دلیل استفاده از فناوری‌های پیشرفته و مواد باکیفیت، قیمت این کفش‌ها نسبت به سایر مدل‌ها کمی بالاتر است.",
          },
          {
            title: "دوام کمتر نسبت به برخی مدل‌های دیگر:",
            explain:
              "برخی از کاربران گزارش کرده‌اند که رویه‌ی این کفش‌ها نسبت به برخی مدل‌های دیگر دوام کمتری دارد.",
          },
        ],
      },
      {
        title: "کدام مدل فانتوم برای شما مناسب است؟",
        introduction:
          "انتخاب بهترین مدل فانتوم به عوامل مختلفی مانند نوع زمین بازی، سبک بازی و بودجه شما بستگی دارد. برخی از محبوب‌ترین مدل‌های فانتوم عبارتند از:",
        cases: [
          {
            title: "Nike Phantom GT:",
            explain:
              "مناسب برای بازیکنانی که به دنبال شوت‌های قدرتمند و پاس‌های دقیق هستند.",
          },
          {
            title: "Nike Phantom Venom:",
            explain:
              "مناسب برای بازیکنانی که به دنبال ضربه‌های سر و شوت‌های فنی هستند.",
          },
          {
            title: "Nike Phantom Luna:",
            explain:
              "مخصوص بازیکنان زن طراحی شده و دارای ویژگی‌های خاصی برای بهبود عملکرد آن‌ها است.",
          },
        ],
      },
    ],
    result:
      "کفش فوتبال نایک فانتوم یکی از بهترین گزینه‌ها برای بازیکنانی است که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. اگر به دنبال کفشی با طراحی زیبا، فناوری‌های پیشرفته و عملکرد عالی هستید، فانتوم می‌تواند انتخاب مناسبی برای شما باشد. با این حال، قبل از خرید، بهتر است مدل‌های مختلف فانتوم را با هم مقایسه کرده و مدلی را انتخاب کنید که با نیازها و بودجه شما سازگاری بیشتری دارد.",
  },
  {
    id: "blog-2",
    date: "1403/10/9",
    image: "../images/blogs/blog-2.png",
    title: "نقد و بررسی کفش فوتبال نایک فانتوم: غول کنترل توپ",
    introduction:
      "کفش فوتبال نایک فانتوم یکی از محبوب‌ترین و پرطرفدارترین مدل‌های کفش فوتبال در دنیاست که به خاطر طراحی خاص و عملکرد فوق‌العاده‌اش شناخته می‌شود. سری فانتوم نایک به طور معمول برای بازیکنانی طراحی شده که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. در این بررسی، به ویژگی‌ها، مزایا و معایب این مدل کفش خواهیم پرداخت.",
    parts: [
      {
        title: "ویژگی‌های کلیدی کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "رویه‌ی انعطاف‌پذیر و متناسب با شکل پا:",
            explain:
              "رویه‌ی این کفش معمولاً از جنس‌های نرم و انعطاف‌پذیری مانند Flyknit ساخته شده که باعث می‌شود پا به خوبی در کفش قرار گیرد و احساس راحتی بیشتری داشته باشد.",
          },
          {
            title: "فناوری‌های نوین برای کنترل توپ:",
            explain:
              "نایک در مدل‌های مختلف فانتوم از فناوری‌های مختلفی مانند All Conditions Control (ACC) برای بهبود چسبندگی توپ در هر شرایط آب و هوایی و Nike Gripknit برای افزایش اصطکاک بین پا و توپ استفاده کرده است.",
          },
          {
            title: "پشتیبانی مناسب از مچ پا:",
            explain:
              "بسیاری از مدل‌های فانتوم دارای یقه‌ای بلند هستند که از مچ پا پشتیبانی کرده و باعث می‌شود پا در جای خود محکم شود.",
          },
          {
            title: "پخش نیرو و کاهش فشار روی مفاصل:",
            explain:
              "کف این کفش‌ها به گونه‌ای طراحی شده که نیرو را به طور مساوی پخش کرده و از وارد آمدن فشار بیش از حد به مفاصل جلوگیری کند.",
          },
        ],
      },
      {
        title: "مزایای کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "کنترل توپ فوق‌العاده:",
            explain:
              "این کفش‌ها به دلیل طراحی خاص رویه و فناوری‌های به کار رفته در آن‌ها، کنترل توپ بسیار بالایی را به بازیکن ارائه می‌دهند.",
          },
          {
            title: "راحتی و تناسب بالا:",
            explain:
              "رویه‌ی نرم و انعطاف‌پذیر این کفش‌ها باعث می‌شود پا به خوبی در آن‌ها قرار گیرد و احساس راحتی داشته باشد.",
          },
          {
            title: "ظاهر زیبا و جذاب:",
            explain:
              "طراحی شیک و مدرن این کفش‌ها باعث شده که علاوه بر عملکرد بالا، از نظر ظاهری نیز بسیار جذاب باشند.",
          },
          {
            title: "مناسب برای انواع زمین:",
            explain:
              "بسیاری از مدل‌های فانتوم برای انواع زمین‌های طبیعی و مصنوعی مناسب هستند.",
          },
        ],
      },
      {
        title: "معایب کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "قیمت بالا:",
            explain:
              "به دلیل استفاده از فناوری‌های پیشرفته و مواد باکیفیت، قیمت این کفش‌ها نسبت به سایر مدل‌ها کمی بالاتر است.",
          },
          {
            title: "دوام کمتر نسبت به برخی مدل‌های دیگر:",
            explain:
              "برخی از کاربران گزارش کرده‌اند که رویه‌ی این کفش‌ها نسبت به برخی مدل‌های دیگر دوام کمتری دارد.",
          },
        ],
      },
      {
        title: "کدام مدل فانتوم برای شما مناسب است؟",
        introduction:
          "انتخاب بهترین مدل فانتوم به عوامل مختلفی مانند نوع زمین بازی، سبک بازی و بودجه شما بستگی دارد. برخی از محبوب‌ترین مدل‌های فانتوم عبارتند از:",
        cases: [
          {
            title: "Nike Phantom GT:",
            explain:
              "مناسب برای بازیکنانی که به دنبال شوت‌های قدرتمند و پاس‌های دقیق هستند.",
          },
          {
            title: "Nike Phantom Venom:",
            explain:
              "مناسب برای بازیکنانی که به دنبال ضربه‌های سر و شوت‌های فنی هستند.",
          },
          {
            title: "Nike Phantom Luna:",
            explain:
              "مخصوص بازیکنان زن طراحی شده و دارای ویژگی‌های خاصی برای بهبود عملکرد آن‌ها است.",
          },
        ],
      },
    ],
    result:
      "کفش فوتبال نایک فانتوم یکی از بهترین گزینه‌ها برای بازیکنانی است که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. اگر به دنبال کفشی با طراحی زیبا، فناوری‌های پیشرفته و عملکرد عالی هستید، فانتوم می‌تواند انتخاب مناسبی برای شما باشد. با این حال، قبل از خرید، بهتر است مدل‌های مختلف فانتوم را با هم مقایسه کرده و مدلی را انتخاب کنید که با نیازها و بودجه شما سازگاری بیشتری دارد.",
  },
  {
    id: "blog-3",
    date: "1403/10/9",
    image: "../images/blogs/blog-2.png",
    title: "نقد و بررسی کفش فوتبال نایک فانتوم: غول کنترل توپ",
    introduction:
      "کفش فوتبال نایک فانتوم یکی از محبوب‌ترین و پرطرفدارترین مدل‌های کفش فوتبال در دنیاست که به خاطر طراحی خاص و عملکرد فوق‌العاده‌اش شناخته می‌شود. سری فانتوم نایک به طور معمول برای بازیکنانی طراحی شده که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. در این بررسی، به ویژگی‌ها، مزایا و معایب این مدل کفش خواهیم پرداخت.",
    parts: [
      {
        title: "ویژگی‌های کلیدی کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "رویه‌ی انعطاف‌پذیر و متناسب با شکل پا:",
            explain:
              "رویه‌ی این کفش معمولاً از جنس‌های نرم و انعطاف‌پذیری مانند Flyknit ساخته شده که باعث می‌شود پا به خوبی در کفش قرار گیرد و احساس راحتی بیشتری داشته باشد.",
          },
          {
            title: "فناوری‌های نوین برای کنترل توپ:",
            explain:
              "نایک در مدل‌های مختلف فانتوم از فناوری‌های مختلفی مانند All Conditions Control (ACC) برای بهبود چسبندگی توپ در هر شرایط آب و هوایی و Nike Gripknit برای افزایش اصطکاک بین پا و توپ استفاده کرده است.",
          },
          {
            title: "پشتیبانی مناسب از مچ پا:",
            explain:
              "بسیاری از مدل‌های فانتوم دارای یقه‌ای بلند هستند که از مچ پا پشتیبانی کرده و باعث می‌شود پا در جای خود محکم شود.",
          },
          {
            title: "پخش نیرو و کاهش فشار روی مفاصل:",
            explain:
              "کف این کفش‌ها به گونه‌ای طراحی شده که نیرو را به طور مساوی پخش کرده و از وارد آمدن فشار بیش از حد به مفاصل جلوگیری کند.",
          },
        ],
      },
      {
        title: "مزایای کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "کنترل توپ فوق‌العاده:",
            explain:
              "این کفش‌ها به دلیل طراحی خاص رویه و فناوری‌های به کار رفته در آن‌ها، کنترل توپ بسیار بالایی را به بازیکن ارائه می‌دهند.",
          },
          {
            title: "راحتی و تناسب بالا:",
            explain:
              "رویه‌ی نرم و انعطاف‌پذیر این کفش‌ها باعث می‌شود پا به خوبی در آن‌ها قرار گیرد و احساس راحتی داشته باشد.",
          },
          {
            title: "ظاهر زیبا و جذاب:",
            explain:
              "طراحی شیک و مدرن این کفش‌ها باعث شده که علاوه بر عملکرد بالا، از نظر ظاهری نیز بسیار جذاب باشند.",
          },
          {
            title: "مناسب برای انواع زمین:",
            explain:
              "بسیاری از مدل‌های فانتوم برای انواع زمین‌های طبیعی و مصنوعی مناسب هستند.",
          },
        ],
      },
      {
        title: "معایب کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "قیمت بالا:",
            explain:
              "به دلیل استفاده از فناوری‌های پیشرفته و مواد باکیفیت، قیمت این کفش‌ها نسبت به سایر مدل‌ها کمی بالاتر است.",
          },
          {
            title: "دوام کمتر نسبت به برخی مدل‌های دیگر:",
            explain:
              "برخی از کاربران گزارش کرده‌اند که رویه‌ی این کفش‌ها نسبت به برخی مدل‌های دیگر دوام کمتری دارد.",
          },
        ],
      },
      {
        title: "کدام مدل فانتوم برای شما مناسب است؟",
        introduction:
          "انتخاب بهترین مدل فانتوم به عوامل مختلفی مانند نوع زمین بازی، سبک بازی و بودجه شما بستگی دارد. برخی از محبوب‌ترین مدل‌های فانتوم عبارتند از:",
        cases: [
          {
            title: "Nike Phantom GT:",
            explain:
              "مناسب برای بازیکنانی که به دنبال شوت‌های قدرتمند و پاس‌های دقیق هستند.",
          },
          {
            title: "Nike Phantom Venom:",
            explain:
              "مناسب برای بازیکنانی که به دنبال ضربه‌های سر و شوت‌های فنی هستند.",
          },
          {
            title: "Nike Phantom Luna:",
            explain:
              "مخصوص بازیکنان زن طراحی شده و دارای ویژگی‌های خاصی برای بهبود عملکرد آن‌ها است.",
          },
        ],
      },
    ],
    result:
      "کفش فوتبال نایک فانتوم یکی از بهترین گزینه‌ها برای بازیکنانی است که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. اگر به دنبال کفشی با طراحی زیبا، فناوری‌های پیشرفته و عملکرد عالی هستید، فانتوم می‌تواند انتخاب مناسبی برای شما باشد. با این حال، قبل از خرید، بهتر است مدل‌های مختلف فانتوم را با هم مقایسه کرده و مدلی را انتخاب کنید که با نیازها و بودجه شما سازگاری بیشتری دارد.",
  },
  {
    id: "blog-4",
    date: "1403/10/9",
    image: "../images/blogs/blog-1.png",
    title: "نقد و بررسی کفش فوتبال نایک فانتوم: غول کنترل توپ",
    introduction:
      "کفش فوتبال نایک فانتوم یکی از محبوب‌ترین و پرطرفدارترین مدل‌های کفش فوتبال در دنیاست که به خاطر طراحی خاص و عملکرد فوق‌العاده‌اش شناخته می‌شود. سری فانتوم نایک به طور معمول برای بازیکنانی طراحی شده که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. در این بررسی، به ویژگی‌ها، مزایا و معایب این مدل کفش خواهیم پرداخت.",
    parts: [
      {
        title: "ویژگی‌های کلیدی کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "رویه‌ی انعطاف‌پذیر و متناسب با شکل پا:",
            explain:
              "رویه‌ی این کفش معمولاً از جنس‌های نرم و انعطاف‌پذیری مانند Flyknit ساخته شده که باعث می‌شود پا به خوبی در کفش قرار گیرد و احساس راحتی بیشتری داشته باشد.",
          },
          {
            title: "فناوری‌های نوین برای کنترل توپ:",
            explain:
              "نایک در مدل‌های مختلف فانتوم از فناوری‌های مختلفی مانند All Conditions Control (ACC) برای بهبود چسبندگی توپ در هر شرایط آب و هوایی و Nike Gripknit برای افزایش اصطکاک بین پا و توپ استفاده کرده است.",
          },
          {
            title: "پشتیبانی مناسب از مچ پا:",
            explain:
              "بسیاری از مدل‌های فانتوم دارای یقه‌ای بلند هستند که از مچ پا پشتیبانی کرده و باعث می‌شود پا در جای خود محکم شود.",
          },
          {
            title: "پخش نیرو و کاهش فشار روی مفاصل:",
            explain:
              "کف این کفش‌ها به گونه‌ای طراحی شده که نیرو را به طور مساوی پخش کرده و از وارد آمدن فشار بیش از حد به مفاصل جلوگیری کند.",
          },
        ],
      },
      {
        title: "مزایای کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "کنترل توپ فوق‌العاده:",
            explain:
              "این کفش‌ها به دلیل طراحی خاص رویه و فناوری‌های به کار رفته در آن‌ها، کنترل توپ بسیار بالایی را به بازیکن ارائه می‌دهند.",
          },
          {
            title: "راحتی و تناسب بالا:",
            explain:
              "رویه‌ی نرم و انعطاف‌پذیر این کفش‌ها باعث می‌شود پا به خوبی در آن‌ها قرار گیرد و احساس راحتی داشته باشد.",
          },
          {
            title: "ظاهر زیبا و جذاب:",
            explain:
              "طراحی شیک و مدرن این کفش‌ها باعث شده که علاوه بر عملکرد بالا، از نظر ظاهری نیز بسیار جذاب باشند.",
          },
          {
            title: "مناسب برای انواع زمین:",
            explain:
              "بسیاری از مدل‌های فانتوم برای انواع زمین‌های طبیعی و مصنوعی مناسب هستند.",
          },
        ],
      },
      {
        title: "معایب کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "قیمت بالا:",
            explain:
              "به دلیل استفاده از فناوری‌های پیشرفته و مواد باکیفیت، قیمت این کفش‌ها نسبت به سایر مدل‌ها کمی بالاتر است.",
          },
          {
            title: "دوام کمتر نسبت به برخی مدل‌های دیگر:",
            explain:
              "برخی از کاربران گزارش کرده‌اند که رویه‌ی این کفش‌ها نسبت به برخی مدل‌های دیگر دوام کمتری دارد.",
          },
        ],
      },
      {
        title: "کدام مدل فانتوم برای شما مناسب است؟",
        introduction:
          "انتخاب بهترین مدل فانتوم به عوامل مختلفی مانند نوع زمین بازی، سبک بازی و بودجه شما بستگی دارد. برخی از محبوب‌ترین مدل‌های فانتوم عبارتند از:",
        cases: [
          {
            title: "Nike Phantom GT:",
            explain:
              "مناسب برای بازیکنانی که به دنبال شوت‌های قدرتمند و پاس‌های دقیق هستند.",
          },
          {
            title: "Nike Phantom Venom:",
            explain:
              "مناسب برای بازیکنانی که به دنبال ضربه‌های سر و شوت‌های فنی هستند.",
          },
          {
            title: "Nike Phantom Luna:",
            explain:
              "مخصوص بازیکنان زن طراحی شده و دارای ویژگی‌های خاصی برای بهبود عملکرد آن‌ها است.",
          },
        ],
      },
    ],
    result:
      "کفش فوتبال نایک فانتوم یکی از بهترین گزینه‌ها برای بازیکنانی است که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. اگر به دنبال کفشی با طراحی زیبا، فناوری‌های پیشرفته و عملکرد عالی هستید، فانتوم می‌تواند انتخاب مناسبی برای شما باشد. با این حال، قبل از خرید، بهتر است مدل‌های مختلف فانتوم را با هم مقایسه کرده و مدلی را انتخاب کنید که با نیازها و بودجه شما سازگاری بیشتری دارد.",
  },
  {
    id: "blog-5",
    date: "1403/10/9",
    image: "../images/blogs/blog-1.png",
    title: "نقد و بررسی کفش فوتبال نایک فانتوم: غول کنترل توپ",
    introduction:
      "کفش فوتبال نایک فانتوم یکی از محبوب‌ترین و پرطرفدارترین مدل‌های کفش فوتبال در دنیاست که به خاطر طراحی خاص و عملکرد فوق‌العاده‌اش شناخته می‌شود. سری فانتوم نایک به طور معمول برای بازیکنانی طراحی شده که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. در این بررسی، به ویژگی‌ها، مزایا و معایب این مدل کفش خواهیم پرداخت.",
    parts: [
      {
        title: "ویژگی‌های کلیدی کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "رویه‌ی انعطاف‌پذیر و متناسب با شکل پا:",
            explain:
              "رویه‌ی این کفش معمولاً از جنس‌های نرم و انعطاف‌پذیری مانند Flyknit ساخته شده که باعث می‌شود پا به خوبی در کفش قرار گیرد و احساس راحتی بیشتری داشته باشد.",
          },
          {
            title: "فناوری‌های نوین برای کنترل توپ:",
            explain:
              "نایک در مدل‌های مختلف فانتوم از فناوری‌های مختلفی مانند All Conditions Control (ACC) برای بهبود چسبندگی توپ در هر شرایط آب و هوایی و Nike Gripknit برای افزایش اصطکاک بین پا و توپ استفاده کرده است.",
          },
          {
            title: "پشتیبانی مناسب از مچ پا:",
            explain:
              "بسیاری از مدل‌های فانتوم دارای یقه‌ای بلند هستند که از مچ پا پشتیبانی کرده و باعث می‌شود پا در جای خود محکم شود.",
          },
          {
            title: "پخش نیرو و کاهش فشار روی مفاصل:",
            explain:
              "کف این کفش‌ها به گونه‌ای طراحی شده که نیرو را به طور مساوی پخش کرده و از وارد آمدن فشار بیش از حد به مفاصل جلوگیری کند.",
          },
        ],
      },
      {
        title: "مزایای کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "کنترل توپ فوق‌العاده:",
            explain:
              "این کفش‌ها به دلیل طراحی خاص رویه و فناوری‌های به کار رفته در آن‌ها، کنترل توپ بسیار بالایی را به بازیکن ارائه می‌دهند.",
          },
          {
            title: "راحتی و تناسب بالا:",
            explain:
              "رویه‌ی نرم و انعطاف‌پذیر این کفش‌ها باعث می‌شود پا به خوبی در آن‌ها قرار گیرد و احساس راحتی داشته باشد.",
          },
          {
            title: "ظاهر زیبا و جذاب:",
            explain:
              "طراحی شیک و مدرن این کفش‌ها باعث شده که علاوه بر عملکرد بالا، از نظر ظاهری نیز بسیار جذاب باشند.",
          },
          {
            title: "مناسب برای انواع زمین:",
            explain:
              "بسیاری از مدل‌های فانتوم برای انواع زمین‌های طبیعی و مصنوعی مناسب هستند.",
          },
        ],
      },
      {
        title: "معایب کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "قیمت بالا:",
            explain:
              "به دلیل استفاده از فناوری‌های پیشرفته و مواد باکیفیت، قیمت این کفش‌ها نسبت به سایر مدل‌ها کمی بالاتر است.",
          },
          {
            title: "دوام کمتر نسبت به برخی مدل‌های دیگر:",
            explain:
              "برخی از کاربران گزارش کرده‌اند که رویه‌ی این کفش‌ها نسبت به برخی مدل‌های دیگر دوام کمتری دارد.",
          },
        ],
      },
      {
        title: "کدام مدل فانتوم برای شما مناسب است؟",
        introduction:
          "انتخاب بهترین مدل فانتوم به عوامل مختلفی مانند نوع زمین بازی، سبک بازی و بودجه شما بستگی دارد. برخی از محبوب‌ترین مدل‌های فانتوم عبارتند از:",
        cases: [
          {
            title: "Nike Phantom GT:",
            explain:
              "مناسب برای بازیکنانی که به دنبال شوت‌های قدرتمند و پاس‌های دقیق هستند.",
          },
          {
            title: "Nike Phantom Venom:",
            explain:
              "مناسب برای بازیکنانی که به دنبال ضربه‌های سر و شوت‌های فنی هستند.",
          },
          {
            title: "Nike Phantom Luna:",
            explain:
              "مخصوص بازیکنان زن طراحی شده و دارای ویژگی‌های خاصی برای بهبود عملکرد آن‌ها است.",
          },
        ],
      },
    ],
    result:
      "کفش فوتبال نایک فانتوم یکی از بهترین گزینه‌ها برای بازیکنانی است که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. اگر به دنبال کفشی با طراحی زیبا، فناوری‌های پیشرفته و عملکرد عالی هستید، فانتوم می‌تواند انتخاب مناسبی برای شما باشد. با این حال، قبل از خرید، بهتر است مدل‌های مختلف فانتوم را با هم مقایسه کرده و مدلی را انتخاب کنید که با نیازها و بودجه شما سازگاری بیشتری دارد.",
  },
  {
    id: "blog-6",
    date: "1403/10/9",
    image: "../images/blogs/blog-2.png",
    title: "نقد و بررسی کفش فوتبال نایک فانتوم: غول کنترل توپ",
    introduction:
      "کفش فوتبال نایک فانتوم یکی از محبوب‌ترین و پرطرفدارترین مدل‌های کفش فوتبال در دنیاست که به خاطر طراحی خاص و عملکرد فوق‌العاده‌اش شناخته می‌شود. سری فانتوم نایک به طور معمول برای بازیکنانی طراحی شده که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. در این بررسی، به ویژگی‌ها، مزایا و معایب این مدل کفش خواهیم پرداخت.",
    parts: [
      {
        title: "ویژگی‌های کلیدی کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "رویه‌ی انعطاف‌پذیر و متناسب با شکل پا:",
            explain:
              "رویه‌ی این کفش معمولاً از جنس‌های نرم و انعطاف‌پذیری مانند Flyknit ساخته شده که باعث می‌شود پا به خوبی در کفش قرار گیرد و احساس راحتی بیشتری داشته باشد.",
          },
          {
            title: "فناوری‌های نوین برای کنترل توپ:",
            explain:
              "نایک در مدل‌های مختلف فانتوم از فناوری‌های مختلفی مانند All Conditions Control (ACC) برای بهبود چسبندگی توپ در هر شرایط آب و هوایی و Nike Gripknit برای افزایش اصطکاک بین پا و توپ استفاده کرده است.",
          },
          {
            title: "پشتیبانی مناسب از مچ پا:",
            explain:
              "بسیاری از مدل‌های فانتوم دارای یقه‌ای بلند هستند که از مچ پا پشتیبانی کرده و باعث می‌شود پا در جای خود محکم شود.",
          },
          {
            title: "پخش نیرو و کاهش فشار روی مفاصل:",
            explain:
              "کف این کفش‌ها به گونه‌ای طراحی شده که نیرو را به طور مساوی پخش کرده و از وارد آمدن فشار بیش از حد به مفاصل جلوگیری کند.",
          },
        ],
      },
      {
        title: "مزایای کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "کنترل توپ فوق‌العاده:",
            explain:
              "این کفش‌ها به دلیل طراحی خاص رویه و فناوری‌های به کار رفته در آن‌ها، کنترل توپ بسیار بالایی را به بازیکن ارائه می‌دهند.",
          },
          {
            title: "راحتی و تناسب بالا:",
            explain:
              "رویه‌ی نرم و انعطاف‌پذیر این کفش‌ها باعث می‌شود پا به خوبی در آن‌ها قرار گیرد و احساس راحتی داشته باشد.",
          },
          {
            title: "ظاهر زیبا و جذاب:",
            explain:
              "طراحی شیک و مدرن این کفش‌ها باعث شده که علاوه بر عملکرد بالا، از نظر ظاهری نیز بسیار جذاب باشند.",
          },
          {
            title: "مناسب برای انواع زمین:",
            explain:
              "بسیاری از مدل‌های فانتوم برای انواع زمین‌های طبیعی و مصنوعی مناسب هستند.",
          },
        ],
      },
      {
        title: "معایب کفش فوتبال نایک فانتوم:",
        introduction: "",
        cases: [
          {
            title: "قیمت بالا:",
            explain:
              "به دلیل استفاده از فناوری‌های پیشرفته و مواد باکیفیت، قیمت این کفش‌ها نسبت به سایر مدل‌ها کمی بالاتر است.",
          },
          {
            title: "دوام کمتر نسبت به برخی مدل‌های دیگر:",
            explain:
              "برخی از کاربران گزارش کرده‌اند که رویه‌ی این کفش‌ها نسبت به برخی مدل‌های دیگر دوام کمتری دارد.",
          },
        ],
      },
      {
        title: "کدام مدل فانتوم برای شما مناسب است؟",
        introduction:
          "انتخاب بهترین مدل فانتوم به عوامل مختلفی مانند نوع زمین بازی، سبک بازی و بودجه شما بستگی دارد. برخی از محبوب‌ترین مدل‌های فانتوم عبارتند از:",
        cases: [
          {
            title: "Nike Phantom GT:",
            explain:
              "مناسب برای بازیکنانی که به دنبال شوت‌های قدرتمند و پاس‌های دقیق هستند.",
          },
          {
            title: "Nike Phantom Venom:",
            explain:
              "مناسب برای بازیکنانی که به دنبال ضربه‌های سر و شوت‌های فنی هستند.",
          },
          {
            title: "Nike Phantom Luna:",
            explain:
              "مخصوص بازیکنان زن طراحی شده و دارای ویژگی‌های خاصی برای بهبود عملکرد آن‌ها است.",
          },
        ],
      },
    ],
    result:
      "کفش فوتبال نایک فانتوم یکی از بهترین گزینه‌ها برای بازیکنانی است که به دنبال کنترلی بی‌نظیر روی توپ و پاس‌های دقیق هستند. اگر به دنبال کفشی با طراحی زیبا، فناوری‌های پیشرفته و عملکرد عالی هستید، فانتوم می‌تواند انتخاب مناسبی برای شما باشد. با این حال، قبل از خرید، بهتر است مدل‌های مختلف فانتوم را با هم مقایسه کرده و مدلی را انتخاب کنید که با نیازها و بودجه شما سازگاری بیشتری دارد.",
  },
];

function PreBlog() {
  useAos();
  return (
    <section className="container w-full my-5 lg:my-10" data-aos="fade-up">
      {/* Section Head */}
      <SectionHeader
        title="بلاگ ها"
        subtitle="جذاب ترین موضوعات نایک"
        link="/blog"
      />
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((cur, i) => i < 2 && <SlideBlog blog={cur} key={i} />)}
      </div>
    </section>
  );
}

export default PreBlog;
