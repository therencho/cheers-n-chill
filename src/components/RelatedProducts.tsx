"use client";

import { FC, useState } from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Product } from "@/lib/data/products";
interface RelatedProductProps {
  relatedProducts: Product[];
}

const RelatedProduct: FC<RelatedProductProps> = ({ relatedProducts }) => {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  return (
    <div className="w-full bg-white font-lato">
      <div className="w-full max-w-screen-xl mx-auto py-20 ">
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl md:text-5xl ">
            <p className="text-inherit leading-[3.5rem] font-bold font-playfair">
              Related Product
            </p>
          </div>
          <div className=" flex flex-row items-center justify-start gap-1 text-center text-[1.125rem] text-secondary">
            <b className="flex-1 relative leading-[1.969rem] capitalize">
              All natural Wines
            </b>
            <div className="flex flex-col items-start justify-start">
              <div className="w-[1.394rem] h-[0.944rem] relative">
                <div className="absolute top-[0.406rem] left-[0rem] rounded-12xs bg-secondary w-[1.25rem] h-[0.138rem]" />
                <div className="absolute top-[-0.009rem] left-[0.899rem] rounded-12xs box-border w-[0.675rem] h-[0.688rem] [transform:_rotate(43.99deg)] [transform-origin:0_0] z-[1] border-t-[2px] border-solid border-secondary border-r-[2px]" />
              </div>
            </div>
          </div>
        </div>
        <Carousel
          className="w-full mt-20 flex justify-center items-center h-full"
          orientation={isMdScreen ? "horizontal" : "vertical"}
          opts={{
            align: "start",
          }}
        >
          <CarouselContent className="h-[1600px] lg:h-auto">
            {relatedProducts.map((value, index) => (
              <CarouselItem
                key={index}
                className="basis-auto"
              >
                <div className="hidden md:flex lg:hidden justify-center items-center gap-4">
                  <Card
                    id={index}
                    image={value.image}
                    name={value.name}
                    price={value.price}
                    discount={value?.discount}
                  />
                  <Card
                    id={index}
                    image={value.image}
                    name={value.name}
                    price={value.price}
                    discount={value?.discount}
                  />
                </div>
                <div className="md:hidden lg:flex">
                  <Card
                    id={index}
                    image={value.image}
                    name={value.name}
                    price={value.price}
                    discount={value?.discount}
                  />
                </div>
                <div>{index}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default RelatedProduct;
