import { FC } from "react";

interface BrandsProps {}

const Brands: FC<BrandsProps> = ({}) => {
  return (
    <section className="w-full h-full bg-white">
      <div className=" flex items-start justify-between max-w-screen-xl mx-auto gap-[1.25rem] my-10 px-4">
        <img
          className="h-[2.688rem] w-[14.813rem]  shrink-0 object-cover min-h-[2.688rem]"
          loading="lazy"
          alt=""
          src="/logo1png@2x.png"
        />
        <img
          className="h-[2.688rem] w-[14.813rem]  shrink-0 object-cover min-h-[2.688rem]"
          alt=""
          src="/logo1png@2x.png"
        />
        <img
          className="h-[2.688rem] w-[14.813rem]  shrink-0 object-cover min-h-[2.688rem]"
          alt=""
          src="/logo1png@2x.png"
        />
        <img
          className="h-[2.688rem] w-[14.813rem]  shrink-0 object-cover min-h-[2.688rem]"
          alt=""
          src="/logo1png@2x.png"
        />
      </div>
    </section>
  );
};

export default Brands;
