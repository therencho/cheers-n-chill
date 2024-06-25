import { FC } from "react";

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <div className="overflow-hidden bg-white w-full font-lato">
      <div className="max-w-screen-xl py-10 lg:py-14 mx-auto w-full px-4">
        <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-card font-playfair">
            Client Testimonials{" "}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex h-auto">
            <div className="flex flex-col bg-primary rounded-xl ">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800 ">
                  {`"Cheers-n-Chill is my Dubai liquor store of choice. Impressive selection, friendly staff with great recommendations. Found a new favorite bourbon thanks to them!"`}
                </p>
              </div>

              <div className="p-4 border-t-2 border-secondary  rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0"></div>

                  <div className="grow ms-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                      Omar Ahmed
                    </p>
                    <p className="text-xs text-gray-500 ">
                      Beverage Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col bg-primary rounded-xl ">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800 ">
                  {`" Cheers-n-Chill simplifies event planning in Dubai. Easy online ordering, curated selection for any occasion, and fun tastings to discover new favorites. "`}
                </p>
              </div>

              <div className="p-4 border-t-2 border-secondary  rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0"></div>

                  <div className="grow ms-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                      Sarah Al Jasmi
                    </p>
                    <p className="text-xs text-gray-500 ">Party Planner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex h-auto">
            <div className="flex flex-col bg-primary rounded-xl ">
              <div className="flex-auto p-4 md:p-6">
                <p className="text-base italic md:text-lg text-gray-800 ">
                  {`" Cheers-n-Chill elevates my food creations. Knowledgeable staff recommends perfect drink pairings, from unique wines to exciting craft beers.  Cheers! "`}
                </p>
              </div>

              <div className="p-4 border-t-2 border-secondary  rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0"></div>

                  <div className="grow ms-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                      David Robinson
                    </p>
                    <p className="text-xs text-gray-500 ">Culinary Expert</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
