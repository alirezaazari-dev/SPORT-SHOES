import StartShow from "../StartShow";

function Comments({ objectCurrentStyle }) {
  return objectCurrentStyle?.comments.length > 0 ? (
    <div className="scrollable-content flex flex-col gap-y-2 font-ShabnamLight text-sm md:text-base xl:text-lg text-justify w-full h-96 px-4  rounded-2xl divide-y-2 overflow-hidden overflow-y-scroll transition-all">
      {objectCurrentStyle?.comments.map((cur, i) => (
        <div className=" pt-2" key={i}>
          <div className="flex justify-between mb-2 font-semibold">
            <span>{cur.name}</span>
            <span>{cur.date}</span>
          </div>
          <p className="flex mb-2 font-ShabnamLight">{cur.comment}</p>
          <div>
            <StartShow rate={cur.rate} />
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex justify-center font-ShabnamLight text-base md:text-lg xl:text-xl text-justify w-full h-16 p-4  rounded-2xl transition-all">
      متاسفانه دیدگاهی ثبت نشده است.
    </div>
  );
}

export default Comments;
