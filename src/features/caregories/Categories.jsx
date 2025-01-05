import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    name: "فوتبال",
    category: "football",
    image: "../images/categories/football.png",
  },
  {
    id: 2,
    name: "رانینگ",
    category: "running",
    image: "../images/categories/running.png",
  },
  {
    id: 3,
    name: "بسکتبال",
    category: "basketball",
    image: "../images/categories/basketball.png",
  },
  {
    id: 4,
    name: "فیتنس",
    category: "fitness",
    image: "../images/categories/fitness.png",
  },
];

function Categories() {
  return (
    <section className="container w-full mb-10 rounded-b-3xl">
      <div className="font-ShabnamBold text-base md:text-xl lg:text-2xl text-zinc-700 flex flex-wrap justify-evenly items-center gap-2 w-full h-full">
        {categories.map((item) => (
          <CategoryItem items={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default Categories;
