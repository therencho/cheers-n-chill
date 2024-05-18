import Link from "next/link";
import { FC } from "react";

interface BannerProps {
  items: {
    label: string ;
    href?: string;
  }[];
  name: string
}


const Banner: FC<BannerProps> = ({ items , name}) => {
  return (
    <div className="w-full py-10 md:py-4 lg:py-0 lg:h-80 bg-primary relative top-0 left-0 flex justify-center items-center font-inter ">
      <div className="flex justify-center items-center flex-col gap-4 w-full max-w-screen-xl p-4 md:p-0">
        <h1 className="text-4xl md:text-5xl text-center font-playfair ">{name}</h1>
        <ol className="flex items-center space-x-2 font-lato">
          {items.map((item, index) => (
            <li key={index} className="flex text-sm items-center">
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-gray-700"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700">{item.label}</span>
              )}
              {index !== items.length - 1 && (
                <span className="mx-2 text-gray-400">|</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Banner;
