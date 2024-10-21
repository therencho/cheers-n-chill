import { Product } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Card: FC<Product> = ({ id, image, name, discount, price }) => {
  return (
    <Link
      href={`/shop/${id}`}
      className="group rounded-lg bg-white transition-all duration-500"
    >
      <div className="relative w-72 h-80 mt-2 flex justify-center items-center font-lato">
        <div className="absolute top-0 left-0 w-full flex justify-center z-10 items-center">
          <img
            src={image}
            alt={name}
            width={500}
            height={500}
            className="w-64 h-64 group-hover:scale-90 transition-all duration-500 z-10"
          />
          <div
            className={`absolute bg-white rounded-md w-32 z-0 bottom-4 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out h-[10rem]`}
          ></div>
        </div>
        <div
          className={`absolute bottom-10 left-0 rounded-xl bg-primary w-full h-52 group-hover:h-[90%] transition-all duration-500`}
        ></div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-[0.375rem]">
        <div className="w-[8rem] relative leading-[1.5rem] capitalize font-playfair flex items-center">
          {name}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0.375rem] text-[1.125rem] text-card-foreground font-lato">
          <b className="relative [text-decoration:line-through] leading-[1.75rem] inline-block min-w-[4.75rem]">
            ${discount}
          </b>
          <b className="flex-1 relative leading-[1.75rem] text-card">
            ${price}
          </b>
        </div>
      </div>
    </Link>
  );
};

export default Card;
