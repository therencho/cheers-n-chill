import Image from "next/image";
import { FC } from "react";

interface WineSpectorPageProps {}

const WineSpectorPage: FC<WineSpectorPageProps> = ({}) => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[5rem] box-border max-w-full text-left text-[3.6rem] text-black font-therenchocom-playfair-display-bold-576 xl:pb-[5rem] xl:box-border sm:pb-[4.25rem] sm:box-border">
    <div className="flex-1 flex flex-row items-start justify-start max-w-full">
      <div className="bg-primary flex-col justify-center items-center w-full  ">
        <div className="self-stretch w-[90rem] relative bg-therenchocom-pinkish hidden max-w-full" />
        <div className="h-[44.119rem] w-[53.5rem] relative min-w-[53.5rem]">
          <img
            className="absolute h-full w-[48rem]  overflow-hidden object-cover z-[1]"
            alt=""
            src="/heroimgjpg@2x.png"
          />
          <img
            className="absolute top-[4.375rem] left-[39.125rem] w-[14.375rem] hidden h-[39.294rem] overflow-hidden object-cover z-[2]"
            loading="lazy"
            alt=""
            src="/bottlepng@2x.png"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full p-4">
          <div className="flex flex-col items-start justify-start gap-4 ">
            <b className="w-full relative flex items-center z-[1] font-inter">
              Wine Spectator
            </b>
            <div className="relative text-[1.25rem] leading-[2.188rem] font-inter z-[1]">
              <p className="m-0">{`White dry wine of Appellation of Controlled Origin. `}</p>
              <p className="m-0">{`Made from grape varieties cultivated in France. `}</p>
              <p className="m-0">{`WooCommerce theme by Catch Themes. `}</p>
              <p className="m-0">Modern edgy Full-Site editing theme.</p>
            </div>
            <button className="cursor-pointer [border:none] pt-[1.2rem] px-[2.563rem] pb-[1.2rem] bg-secondary flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-hotpink">
              <b className="w-[5.563rem] relative text-[1.125rem] leading-[1.969rem] capitalize flex font-therenchocom-lato-regular-16-upper text-primary text-center items-center justify-center min-w-[5.563rem] max-w-[5.948rem]">
                Read More
              </b>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default WineSpectorPage;
