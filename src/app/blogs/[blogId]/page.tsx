import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import { blogPosts } from "@/lib/data/blogs";
import { FC } from "react";

interface PageProps {
  params: { blogId: string };
}

const page: FC<PageProps> = ({ params }) => {
  // Find the blog post with the matching id
  const blogPost = blogPosts.find(
    (post) => post.id === parseInt(params.blogId as string)
  );
  if (!blogPost) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl font-bold text-gray-800">Blog post not found</p>
      </div>
    );
  }
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Blogs", href: "/blogs" },
    { label: blogPost.title, href: `/blogs/${blogPost?.id}` },
  ];
  return (
    <div className="w-full ">
      <Banner items={breadcrumbItems} name={blogPost.title} />
      <div className="w-full mx-auto max-w-screen-xl my-10 flex justify-center items-center">
        <Blog
          content={blogPost.content}
          imageUrl={blogPost.content.image}
          author={blogPost.author}
          date={blogPost.date}
        />
      </div>
    </div>
  );
};

export default page;
