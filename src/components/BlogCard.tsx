import { FC } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { BlogPost } from "@/lib/data/blogs";
import Link from "next/link";


const BlogCard: FC<BlogPost> = ({ content, date, id, title }) => {
  return (
    <Link href={`blogs/${id}`}>
      <Card className="max-w-lg mx-auto h-full w-full font-lato bg-white rounded-lg overflow-hidden shadow-lg">
        <Image
          alt="Wine corks spilled from a glass"
          className="w-full h-80"
          height={1000}
          src={content.image}
          style={{
            aspectRatio: "686/300",
            objectFit: "cover",
          }}
          width={1000}
        />
        <CardContent className="py-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{date}</p>
          <Button className="mt-4" variant="ghost">
            Continue Reading →z
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
