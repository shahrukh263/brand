import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import LiveChatImg from "../images/Live-Chat-img.png";
const TrialComp: NextComponentType = () => {
  return (
    <>
      <section className="">
        <div className="innerDiv">
          <div className="overflow-hidden rounded-3xl bg-[url('../images/free-trial-bg.png')] lg:pl-16 md:pl-12 md:pr-0 lg:pt-20 pt-10 bg-cover lg:bg-no-repeat bg-center">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
              <div className="md:text-left text-center md:pr-3 md:pl-0 md:mb-0 mb-6 px-6" data-aos="fade-right">
                <h3 className="text-[#2B2866] font-[600] inter-display lg:text-[56px] lg:leading-[1] md:text-[42px] sm:text-4xl text-[32px] leading-[38px]">
                  Get started with Brandwise today
                </h3>
                <p className="text-[#475467] md:mt-5 mt-4 lg:mb-8 mb-5">
                  Try Brandwise free for 7 days—you'll have access to every
                  feature. Cancel any time.
                </p>
                <div className="flex sm:flex-row flex-col gap-3">
                  <Link href={"#"} passHref>
                    <a className="flex items-center justify-center gap-1 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[10px] px-[10px] theme-btn rounded-lg border-[1px] border-[solid] [border-image-source:linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0)_100%)] [box-shadow:0px_0px_0px_1px_#335CFF,_0px_1px_2px_0px_#0E121B3D]">
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
              <div>
                <div className="block-img" data-aos="fade-left">
                  <Image src={LiveChatImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrialComp;
