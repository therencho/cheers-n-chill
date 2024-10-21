import { FC } from "react";
import Link from "next/link";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-primary w-full font-lato ">
      <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8 mb-16 md:mb-0 px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
          <Link href={"/"} className={`text-2xl font-playfair `}>
              Cheers & Chill
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Buying Options
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="/contact" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/shop"
                    className="hover:underline"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Know Us
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a
                    href="/about"
                    className="hover:underline "
                  >
                   About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/blogs"
                    className="hover:underline"
                  >
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500  font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline">
              Cheers&Chills™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
