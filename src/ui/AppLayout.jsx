import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoaderAll from "./LoaderAll";
import { useEffect, useState } from "react";

function AppLayout() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3000 میلی‌ثانیه = 3 ثانیه

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      {isLoading && <LoaderAll />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
