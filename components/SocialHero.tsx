import type { NextComponentType } from "next";
import HeroImg from "../images/social-hero-img.png";
import Image from "next/image";
import Link from "next/link";
const SocialHero: NextComponentType = () => {
  return (
    <>
      <section className="mb-16 pt-16 md:pt-20 relative bg-[url('../images/social-hero-bg.png')] bg-cover bg-no-repeat bg-bottom md:bg-top">
        <div className="innerDiv">
          <div className="text-center" data-aos="fade-up">
            <p className="uppercase text-xs font-medium tracking-[0.04em] text-[#5650CD] mb-8">
              ai-powered social inbox
            </p>
            <h1 className="font-[800] lg:text-[72px] md:text-[60px] text-[40px] leading-[1] text-[#2B2866] tracking-[-0.02em] lg:w-9/12 mx-auto">
              Convert more sales with smarter engagement
            </h1>
            <p className="text-[#475467] md:text-base text-sm font-[500] mt-5 mb-8">
              Moderate comments, manage conversations at scale, and increase
              your sales with AI.
            </p>
            <div className="flex sm:flex-row flex-col gap-3 justify-center">
              <Link href={"#"} passHref>
                <a className="flex items-center justify-center gap-1 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[10px] px-[10px] theme-btn rounded-[10px] border-[1px] border-[solid] [border-image-source:linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0)_100%)] [box-shadow:0px_0px_0px_1px_#335CFF,_0px_1px_2px_0px_#0E121B3D]">
                  Start Free Trial
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-white w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </Link>
              <Link href={"#"} passHref>
                <a className="inline-block py-[10px] px-[14px] rounded-lg text-[#475467] text-[14px] font-medium leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                  Book a Demo
                </a>
              </Link>
            </div>
          </div>
        </div>
          <div data-aos="fade-up">
            <Image src={HeroImg} alt="" />
          </div>
      </section>
    </>
  );
};
export default SocialHero;
