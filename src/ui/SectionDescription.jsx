function SectionDescription({ title, description, translate }) {
  return (
    <div
      className={`py-3 px-4 border-4 shadow-xl rounded-2xl bg-white ${
        translate && "xl:animate-slideUp xl:-translate-y-10"
      }`}
    >
      <h4 className="font-ShabnamBold text-base md:text-lg lg:text-xl mb-2 underline">
        {title}
      </h4>
      <p className="text-justify text-sm md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
}

export default SectionDescription;
