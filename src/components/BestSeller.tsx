"use client";

import { FC, useEffect, useState } from "react";
import Card from "./Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface BestSellerProps {}

const BestSeller: FC<BestSellerProps> = ({}) => {
  const [isMdScreen, setIsMdScreen] = useState(window.innerWidth >= 768);

  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-screen-xl mx-auto py-20 ">
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl md:text-5xl ">
            <p className="text-inherit leading-[3.5rem] font-bold font-playfair">
              Best Seller
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-1 text-center text-[1.125rem] text-secondary font-in">
            <b className="flex-1 relative leading-[1.969rem] font-lato capitalize">
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
            {Array.from({ length: 15 }).map((_, index) => (
              <CarouselItem
                key={index}
                className="basis-1/4 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="hidden md:flex lg:hidden justify-center items-center gap-4">
                  <Card
                    image="/sample-image@2x.png"
                    name="Muscat Wine"
                    price={100}
                    discount={120}
                    id={index}
                  />
                  <Card
                    image="/sample-image@2x.png"
                    name="Muscat Wine"
                    price={100}
                    discount={120}
                    id={index}
                  />
                </div>
                <div className="md:hidden lg:flex">
                  <Card
                    image="/sample-image@2x.png"
                    name="Muscat Wine"
                    price={100}
                    discount={120}
                    id={index}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>

        <div className="w-full flex justify-center items-center mt-20">
          <button className="cursor-pointer [border:none] pt-[0.875rem] px-[4.125rem] pb-[0.938rem] bg-secondary w-[15.938rem] !m-[0] top-[116.188rem] right-[37rem] flex flex-row items-start justify-start box-border whitespace-nowrap z-[2] hover:bg-hotpink">
            <b className="flex-1 relative font-lato text-[1.125rem] leading-[1.969rem] capitalize inline-block font-therenchocom-lato-regular-16-upper text-primary-foreground text-center min-w-[7.625rem]">
              Get Yours Now
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
