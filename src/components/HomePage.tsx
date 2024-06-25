import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = ({}) => {
  return (
    <div className="bg-primary w-full font-inter ">
      <div className="max-w-screen-xl  mx-auto h-[65rem] lg:h-[40rem] py-20 flex flex-col justify-start items-start lg:flex-row">
        <div className="space-y-6 px-6 w-full  ">
          <div className="space-y-2 flex items-center gap-2">
            <h4 className="text-lg font-lato">Cheers!!!</h4>
            <hr className="border-2 border-black w-16" />
          </div>
          <h1 className=" font-playfair text-[5rem] leading-[6rem] z-[2] text-secondary ">
            <p className="m-0">
              <b>
                <span>Craft Your</span>
              </b>
            </p>
            <p className="m-0 text-slate-900">
              <b>
                <span>{`Perfect `}</span>
              </b>
              <span>
                <i className="font-bold ">Pour</i>
              </span>
            </p>
          </h1>
          <p className="text-lg font-lato">
            Explore a world of flavors, from bold spirits to crisp wines and
            refreshing beers. Craft unforgettable moments with every sip.
          </p>
          <Button className="bg-secondary text-white font-lato px-6 py-3 rounded-md">
            <Link href={"/shop"}>View More</Link>
          </Button>
        </div>
        <div className="w-full lg:relative flex items-end justify-end ">
          <Image
            alt="Wine and grapes"
            className="lg:absolute w-[40rem] right-0 top-10 animate-bounce "
            height={1000}
            src="/hero-cheers-1@2x.png"
            style={{
              objectFit: "cover",
            }}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
