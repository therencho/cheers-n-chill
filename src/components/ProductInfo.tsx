import { Product } from "@/lib/data/products";
import Image from "next/image";
import { FC } from "react";

const ProductInfo: FC<Product> = ({
  id,
  image,
  name,
  price,
  description,
  category,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row font-lato justify-center items-center gap-4 p-6 md:p-0">
      <div className="md:w-1/2 w-full">
        <Image
          className="h-auto max-w-full overflow-hidden object-cover w-full"
          loading="lazy"
          alt={name}
          src={image}
          width={1000}
          height={1000}
        />
      </div>

      <div className="flex md:w-1/2 flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-6">
          <h2 className=" text-inherit text-2xl font-playfair leading-[2.25rem] font-bold">
            {name}
          </h2>
          <b className=" text-[1.125rem] leading-[1.969rem] inline-block ">
            $ {price}
          </b>
          <div className=" text-[1.25rem] leading-[2.188rem] text-black">
            <p className="m-0">{description}</p>
          </div>
          <button className="cursor-pointer [border:none] pt-[0.875rem] px-[1rem] pb-[0.938rem] bg-secondary w-[9.75rem] flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-secondary-foreground">
            <b className="flex-1  text-[1.125rem] leading-[1.969rem] capitalize font-therenchocom-lato-regular-16-upper text-primary text-center">
              Place Order
            </b>
          </button>
          {category && (
            <div className=" text-[1rem] leading-[1.75rem] inline-block max-w-full text-dimgray-100">
              <span className="font-bold">{`Categories: `}</span>
              {category.split(",").map((cat, index) => (
                <span key={index} className="text-therenchocom-cod-gray1">
                  {cat.trim()}
                  {index !== category.split(",").length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
