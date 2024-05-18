import Banner from "@/components/Banner";

const page = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];

  return (
    <div className="w-full h-full">
      <Banner items={breadcrumbItems} name={"About Us"} />

      <div className=" max-w-screen-xl mx-auto flex flex-col justify-center items-center pb-20">
        <section className="pt-10 overflow-hidden ">
          {" "}
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div className=" text-center md:text-start">
              <h2 className="text-3xl font-playfair leading-tight text-black  sm:text-4xl lg:text-5xl">
                Hey 👋 I am
                <br className="block sm:hidden" />
                Jenny Carter
              </h2>
              <p className="max-w-lg mt-3 text-xl font-lato leading-relaxed text-gray-600  md:mt-8">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>

              <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 font-lato md:mt-8">
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                  <span className="relative"> Have a question? </span>
                </span>
                <br className="block sm:hidden" />
                Ask me on{" "}
                <a
                  href="#"
                  title=""
                  className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                >
                  Twitter
                </a>
              </p>
            </div>

            <div className="relative">
              <img
                className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                alt=""
              />
            </div>
          </div>
        </section>{" "}
        <div className="w-full max-w-7xl px-4 mx-auto sm:px-8 mt-24 font-lato">
          <blockquote className="relative grid items-center bg-white shadow-2xl md:grid-cols-3 rounded-xl">
            <img
              className="hidden object-cover w-full h-full rounded-l-xl md:block"
              src="https://randomuser.me/api/portraits/men/68.jpg"
            />

            <article className="relative p-6 md:p-8 md:col-span-2">
              <svg
                className="absolute top-0 right-0 hidden w-24 h-24 -mt-12 -mr-12 text-primary-600 md:block"
                width="256"
                height="256"
                viewBox="0 0 256 256"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                  stroke="currentColor"
                  stroke-width="8"
                ></path>
              </svg>

              <div className="space-y-8">
                <p className="text-base sm:leading-relaxed md:text-2xl">
                  Hi, I&apos;m John. I&apos;m a 35-year-old software engineer
                  with a passion for creating innovative solutions. I graduated
                  with a degree in Computer Science from a prestigious
                  university and have been working in the tech industry for over
                  a decade. Throughout my career, I have gained extensive
                  experience in programming languages like Python, Java, and
                  C++. I thrive in challenging environments and enjoy
                  collaborating with teams to develop cutting-edge software
                  applications.
                </p>

                <footer className="flex items-center space-x-4 md:space-x-0">
                  <img
                    className="w-12 h-12 rounded-full md:hidden"
                    src="https://randomuser.me/api/portraits/men/68.jpg"
                  />
                  <span className="font-bold text-lg">John doe</span>
                </footer>
              </div>
            </article>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default page;
