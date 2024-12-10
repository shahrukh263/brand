import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";
import Logo from "../images/Logo.svg";
import { useState } from "react";

const Navbar: NextComponentType = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleToggle = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <>
      <header className="sticky w-full shadow-[0px_1px_4px_0px_#2B28660D] backdrop-filter backdrop-blur-md">
        <div className="innerDiv">
          <nav className="md:flex items-center">
            <div className="flex items-center justify-between">
              <Link href={"/"} passHref>
                <a className="inline-block py-[19px]">
                  <Image src={Logo} alt="" className="" />
                </a>
              </Link>
              <div className="md:hidden block">
                <Link href={"#"} passHref>
                  <a className="inline-block text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[6px] px-[10px] theme-btn rounded-lg">
                    Start Free Trial
                  </a>
                </Link>
              </div>
              <button
                onClick={handleToggle}
                type="button"
                className="md:hidden block bg-white [box-shadow:0px_1px_3px_0px_rgba(14,18,27,0.12)] rounded-lg p-[6px]"
              >
                {navOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#475467] w-7 h-7 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-[#475467] w-7 h-7 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <div
              className={
                "md:items-center w-full md:flex-row flex-col" +
                (navOpen ? " flex" : " md:flex hidden")
              }
            >
              <ul className="md:flex md:mx-auto">
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-flex items-center gap-1 py-[22px] lg:px-7 md:px-3 text-[#475467] text-[14px] font-medium leading-[20px] tracking-[-0.006em]">
                      Product{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[rgba(71,84,103,1)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"/pricing"} passHref>
                    <a className="inline-block py-[22px] lg:px-7 md:px-3 text-[#475467] text-[14px] font-medium leading-[20px] tracking-[-0.006em]">
                      Pricing
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-block py-[22px] lg:px-7 md:px-3 text-[#475467] text-[14px] font-medium leading-[20px] tracking-[-0.006em]">
                      Roadmap
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-flex items-center gap-1 py-[22px] lg:px-7 md:px-3 text-[#475467] text-[14px] font-medium leading-[20px] tracking-[-0.006em]">
                      Resources{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-[rgba(71,84,103,1)]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="flex gap-4">
                <li>
                  <Link href={"#"} passHref>
                    <a className="inline-block p-[6px] rounded-lg text-[#475467] text-[14px] font-medium leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                      Log In
                    </a>
                  </Link>
                </li>
                <li className="md:block hidden">
                  <Link href={"#"} passHref>
                    <a className="theme-btn inline-block text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[6px] px-[10px] theme-btn rounded-lg">
                      Start Free Trial
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
