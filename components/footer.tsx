import type { NextComponentType } from "next";
import Image from "next/image";
import Logo from "../images/Logo.svg";
import Link from "next/link";
import Xlogo from "../images/x-logo.svg";
import LinkedinLogo from "../images/linkedin-logo.svg";
import DiscordLogo from "../images/discord-icon.svg";

const Footer: NextComponentType = () => {
  return (
    <>
      <footer className="bg-white lg:py-24 md:py-20 sm:py-16 py-12">
        <div className="innerDiv">
          <div className="flex flex-wrap sm:-mx-4" data-aos="fade-up">
            <div className="sm:px-4 lg:w-1/3 md:w-1/3 w-full">
              <div className="mb-8">
                <Link href={"#"}>
                  <Image src={Logo} alt="" />
                </Link>
                <p className="text-[#0C111D] text-base font-[400] tracking-[-0.011em] mt-4">
                  Your AI-powered Brand Manager
                </p>
              </div>
              <ul className="flex gap-3 md:mb-0 mb-12">
                <li>
                  <Link
                    href={"#"}
                    className="flex justify-center items-center w-8 h-8 border border-[#E4E7EC] [shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-lg"
                  >
                    <Image src={Xlogo} alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="flex justify-center items-center w-8 h-8 border border-[#E4E7EC] [shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-lg"
                  >
                    <Image src={LinkedinLogo} alt="" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="flex justify-center items-center w-8 h-8 border border-[#E4E7EC] [shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] rounded-lg"
                  >
                    <Image src={DiscordLogo} alt="" />
                  </Link>
                </li>
              </ul>
              <p className="text-[#475467] text-xs mt-8 md:block hidden font-[300]">
                © 2024 Brandwise. All Rights Reserved.
              </p>
            </div>
            <div className="sm:px-4 lg:w-8/12 md:w-8/12 w-full">
              <div className="sm:flex sm:justify-between grid grid-cols-2 gap-y-12 sm:gap-0">
                <div>
                  <h4 className="text-xs text-[#475467] font-[400] tracking-[0.04em] uppercase mb-6">
                    Product
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {/* <li><Link href={'#'} passHref><a className="block text-[#0C111D] text-base font-[300] tracking-[-0.006em]">Helpdesk</a></Link></li> */}
                    <li>
                      <Link
                        href={"/helpdesk"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Helpdesk
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/social-inbox"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Social Inbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Book a Demo
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Roadmap
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-[#475467] font-[400] tracking-[0.04em] uppercase mb-6">
                    Company
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {/* <li><Link href={'#'} passHref><a className="block text-[#0C111D] text-base font-[300] tracking-[-0.006em]">About Us</a></Link></li> */}
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Affiliate Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Contact Us
                      </Link>
                    </li>
                    {/* <li><Link href={'#'} passHref><a className="block text-[#0C111D] text-base font-[300] tracking-[-0.006em]">Careers <span className="bg-[#6962FB] text-white w-5 h-[18px] text-xs inline-flex justify-center items-center rounded-full">2</span></a></Link></li> */}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-[#475467] font-[400] tracking-[0.04em] uppercase mb-6">
                    Resources
                  </h4>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Help Center
                      </Link>
                    </li>
                    {/* <li><Link href={'#'} passHref><a className="block text-[#0C111D] text-base font-[300] tracking-[-0.006em]">What’s New</a></Link></li> */}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-[#475467] font-[400] tracking-[0.04em] uppercase mb-6">
                    Legal
                  </h4>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"#"}
                        className="block text-[#0C111D] md:text-base text-sm font-[400] tracking-[-0.006em]"
                      >
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p className="text-[#475467] text-xs mt-8 md:hidden block">
            © 2024 Brandwise. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
