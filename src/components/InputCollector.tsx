import { FC } from "react";

interface InputCollectorProps {}

const InputCollector: FC<InputCollectorProps> = ({}) => {
  return (
    <div className="w-full bg-primary h-auto py-10 font-lato">
      <div className="w-full max-w-screen-xl mx-auto p-4 my-6 md:my-0">
        <div className="my-4 p-4 font-playfair">
          <span className="w-full flex justify-center flex-col md:flex-row items-center text-[2.5rem] lg:text-[4rem]">
            <b>{`The Cheers-n-Chill `}</b>
            <i className="font-bold text-secondary-foreground md:pl-4">
              Community
            </i>
          </span>
        </div>
        <div className="flex items-center justify-center z-[1] text-center my-4">
          More Than Just a Store
        </div>
        <div className="flex flex-row items-center justify-center w-full text-center">
          <div className="flex items-center z-[1] ">
            <span className="w-full">
              <p className="m-0">
                Cheers-n-Chill is more than just a liquor store; it's a
                community for those who appreciate the finer things in life. We
                host tastings, workshops, and events that bring people together
                to celebrate the art of drinks and connect over shared passions.
                Become part of the Cheers-n-Chill community and explore the
                world of beverages with like-minded individuals.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCollector;
