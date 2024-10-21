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
                Explore & Discover
              </span>
              <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white font-playfair sm:text-[40px]/[48px]">
                Your Beverage Odyssey Begins Here
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                Cheers-n-Chill is your one-stop shop for embarking on a flavor
                adventure. With our diverse selection of beverages from around
                the world, you&apos;ll discover new taste profiles, explore unique
                varieties, and expand your appreciation for the artistry of
                drinks. Whether you&apos;re a seasoned connoisseur or a curious
                novice, we have something to tantalize your taste buds and
                ignite your passion for exploring the world of beverages.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                Dive into the world of single-malt scotches, each with its own
                distinct character shaped by the unique terroir of its origin.
                Travel the globe through your palate with a selection of South
                American wines, or embark on a hoppy journey with our collection
                of craft beers from independent brewers around the world.
                Cheers-n-Chill is your passport to a world of flavor
                possibilities..
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Something;