import { FC } from "react";

interface InputCollectorProps {}

const InputCollector: FC<InputCollectorProps> = ({}) => {
  return (
    <div className="w-full bg-primary h-auto py-10 font-lato">
      <div className="w-full max-w-screen-xl mx-auto p-4 my-6 md:my-0">
        <div className="my-4 p-4 font-playfair">
          <span className="w-full flex justify-center flex-col md:flex-row items-center text-[2.5rem] lg:text-[4rem]">
            <b>{`All-Natural `}</b>
            <i className="font-bold text-secondary-foreground md:pl-4">
              Ingredients
            </i>
          </span>
        </div>
        <div className="flex items-center justify-center z-[1] text-center my-4">
          Organic and natural grapes ingredients.Organic and natural grapes
          ingredients.
        </div>
        <div className="flex flex-row items-center justify-center w-full text-center">
          <div className="flex items-center z-[1] ">
            <span className="w-full">
              <p className="m-0">
                Nature is pure, and so are our Kundalini® products. We create
                plant-powered
              </p>
              <p className="m-0">
                balms and oils formulated only with clean ingredients – you
                won’t find
              </p>
              <p className="m-0">
                petrochemicals or synthetic fragrances in our collection.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputCollector;
