import FormSearch from "./FormSearch";

function SubHeader() {
  return (
    <div className="subHedaer flex flex-col items-center justify-end gap-y-2 relative w-full md:min-h-80 mb-2 pb-3 bg-black animate-slideDown overflow-hidden">
      <div className="hidden h-40"></div>
      {/* <img
        src="../images/logoWhite.png"
        className="md:w-[650px] lg:w-[900px] xl:w-[1100px]"
      /> */}
      {/* <img
        src="../images/banner/just-do-it2.png"
        className="md:w-[650px] lg:w-[900px] xl:w-[1100px]"
      /> */}
      <img
        src="../images/nike-logo.png"
        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] 2xl:w-[900px]"
      />
      {/* <img
        src="../images/gif/nike-2.gif"
        className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[800px] 2xl:w-[900px]"
      /> */}
      <FormSearch />
    </div>
  );
}

export default SubHeader;
