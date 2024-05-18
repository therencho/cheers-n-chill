import { FC } from "react";
import { TracingBeam } from "./ui/tracing-beam";
import Image, { StaticImageData } from "next/image";

interface Strategy {
  title: string;
  description: string;
  vedarkUsage: string;
}

interface BlogPostProps {
  content: {
    title: string;
    intro: string;
    strategies: Strategy[];
    conclusion: string;
    disclaimer: string;
  };
  author: string;
  date: string;
  imageUrl?: StaticImageData;
}

const Blog: FC<BlogPostProps> = ({ content, imageUrl, author, date }) => {
  return (
    <TracingBeam className="mx-2">
      <div className="max-w-screen-xl mx-auto antialiased pt-4 mb-10">
        <div className="rounded-lg p-8 w-full">
          <h1 className="text-3xl font-playfair mb-2">{content.title}</h1>
          <div className="flex items-center mb-6">
            <span className="text-gray-400 mr-2">By {author}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400 ml-2">{date}</span>
          </div>
          {imageUrl && (
            <div className="mb-8">
              <Image
                src={imageUrl}
                alt="Blog Post Image"
                width={800}
                height={450}
                className="rounded-lg"
              />
            </div>
          )}
          <div className="prose prose-invert max-w-none mb-8">
            <p>{content.intro}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            {content.strategies.map((strategy, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-playfair  mb-4">
                  {index + 1}. {strategy.title}
                </h2>
                <p>{strategy.description}</p>
                <p className="italic">{strategy.vedarkUsage}</p>
              </div>
            ))}
            <div className="bg-gray-200 rounded-lg p-6">
              <p className="text-lg font-semibold mb-2">Conclusion:</p>
              <p>{content.conclusion}</p>
            </div>
            <p className="bg-red-100/50 p-2 rounded-md mt-4">
              {content.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </TracingBeam>
  );
};

export default Blog;
