import { FC } from "react";

interface SomethingProps {}

const Something: FC<SomethingProps> = ({}) => {
  return (
    <section className="overflow-hidden w-full py-10 bg-primary ">
      <div className=" max-w-screen-xl  mx-auto w-full">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 font-lato">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 text-lg text-secondary">
                Why Choose Us
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white font-playfair sm:text-[40px]/[48px]">
                Make your customers happy by giving services.
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                A domain name is one of the first steps to establishing your
                brand. Secure a consistent brand image with a domain name that
                matches your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Something;
