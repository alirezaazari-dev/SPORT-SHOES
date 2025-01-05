import BlogInnerParts from "./BlogInnerParts";

function BlogParts({ blog }) {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6">
      {blog.parts.map((part, i) => (
        <BlogInnerParts part={part} key={i} />
      ))}
    </div>
  );
}

export default BlogParts;
