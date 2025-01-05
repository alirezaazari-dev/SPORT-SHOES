function BlogInnerParts({ part }) {
  return (
    <div className="flex flex-col gap-y-1 md:gap-y-2">
      <h4 className="font-ShabnamBold text-lg md:text-xl underline text-black">
        {part.title}
      </h4>
      <p className="text-justify">{part.introduction}</p>
      <div className="flex flex-col gap-y-2">
        {part.cases.map((item, i) => (
          <p className="text-justify " key={i}>
            ● <span className=" font-ShabnamBold">{item.title}</span>{" "}
            {item.explain}
          </p>
        ))}
      </div>
    </div>
  );
}

export default BlogInnerParts;
