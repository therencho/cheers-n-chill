import Banner from "@/components/Banner";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data/blogs";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
  ];

  return (
    <div className="w-full h-full">
      <Banner items={breadcrumbItems} name={"Blogs"} />
      <div className=" max-w-screen-xl mx-auto flex flex-col justify-center items-center ">
        <div className="w-full p-4 md:p-0 my-10 flex justify-center  flex-wrap gap-4">
          {blogPosts.map((blog) => (
            <BlogCard
              key={blog.id}
              author=""
              content={blog.content}
              date={blog.date}
              title={blog.title}
              id={blog.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
