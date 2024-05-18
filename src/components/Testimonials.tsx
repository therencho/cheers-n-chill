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
                  {`" With Preline, we're able to easily track our performance
                    in full detail. It's become an essential tool for us to grow
                    and engage with our audience. "`}
                </p>
              </div>

              <div className="p-4 border-t-2 border-secondary  rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div className="grow ms-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                      Josh Tyson
                    </p>
                    <p className="text-xs text-gray-500 ">
                      Product Manager | Capsule
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
                  {`" With Preline, we're able to easily track our performance
                    in full detail. It's become an essential tool for us to grow
                    and engage with our audience. "`}
                </p>
              </div>

              <div className="p-4 border-t-2 border-secondary  rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div className="grow ms-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                      Luisa
                    </p>
                    <p className="text-xs text-gray-500 ">
                      Senior Director of Operations | Fitbit
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
                  {`" With Preline, we're able to easily track our performance
                    in full detail. It's become an essential tool for us to grow
                    and engage with our audience. "`}
                </p>
              </div>

              <div className="p-4 border-t-2 border-secondary  rounded-b-xl md:px-7 ">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                      src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                      alt="Image Description"
                    />
                  </div>

                  <div className="grow ms-3">
                    <p className="text-sm sm:text-base font-semibold text-gray-800 ">
                      Alisa Williams
                    </p>
                    <p className="text-xs text-gray-500 ">
                      Entrepreneur | Happy customer
                    </p>
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
