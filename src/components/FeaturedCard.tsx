import Image from "next/image";
import { FC } from "react";

interface FeaturedCardProps {
  title: string;
  category: string | undefined;
  image: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({ title, category, image }) => {

  return (
    <div className="w-full border bg-white border-card-foreground hover:border-secondary-foreground ">
      <div className="flex justify-center w-full h-full items-center flex-col gap-4 p-10">
        <Image
          className="w-[16.594rem] h-[16.594rem] relative overflow-hidden shrink-0 object-cover"
          loading="lazy"
          alt=""
          width={1000}
          height={1000}
          src={image} 
        />
        <div className="flex flex-col items-start justify-start">
          <div className="leading-[1.563rem] capitalize font-playfair inline-block ">
           {title}
          </div>
          <div className="self-stretch h-[0.063rem] relative bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
