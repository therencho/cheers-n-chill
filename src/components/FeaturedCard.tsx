import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";

interface FeaturedCardProps {}

const FeaturedCard: FC<FeaturedCardProps> = ({}) => {
  return (
    <div className="w-full border bg-white border-card-foreground hover:border-secondary-foreground ">
      <div className="flex justify-center w-full h-full items-center flex-col gap-4 p-10">
        <Image
          className="w-[16.594rem] h-[16.594rem] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          width={1000}
          height={1000}
          src="/whitewine1png@2x.png"
        />
        <div className="flex flex-col items-start justify-start">
          <div className="leading-[1.563rem] capitalize font-playfair inline-block ">
            Best Wine
          </div>
          <div className="self-stretch h-[0.063rem] relative bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
