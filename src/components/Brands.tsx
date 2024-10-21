import { FC } from "react";

interface BrandsProps {}

const Brands: FC<BrandsProps> = ({}) => {
  return (
    <section className="w-full h-full bg-white">
      <div className=" flex items-start justify-between max-w-screen-xl mx-auto gap-[1.25rem] my-10 px-4">
        <img
          className="h-[6rem] w-[14.813rem]  shrink-0 object-cover min-h-[6rem]"
          loading="lazy"
          alt=""
          src="/Logo-1.jpg"
        />
        <img
          className="h-[6rem] w-[14.813rem]  shrink-0 object-cover min-h-[6rem]"
          alt=""
          src="/Logo-2.jpg"
        />
        <img
          className="h-[6rem] w-[14.813rem]  shrink-0 object-cover min-h-[6rem]"
          alt=""
          src="/Logo-3.jpg"
        />
        <img
          className="h-[6rem] w-[14.813rem]  shrink-0 object-cover min-h-[6rem]"
          alt=""
          src="/Logo-4.jpg"
        />
      </div>
    </section>
  );
};

export default Brands;
