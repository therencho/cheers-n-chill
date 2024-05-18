import { FC } from "react";
import FeaturedCard from "./FeaturedCard";

interface FeaturedProps {}

const Featured: FC<FeaturedProps> = ({}) => {
  return (
    <div className="w-full bg-white mb-20 font-lato">
      <div className="w-full max-w-screen-xl mx-auto pb-20 ">
        <div className="flex justify-start items-center mb-10 p-4">
          <div className="text-5xl font-serif ">
            <p className="text-inherit leading-[3.5rem] font-bold font-playfair">
              Featured Category
            </p>
          </div>
        </div>
        <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 ">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </div>
  );
};

export default Featured;
