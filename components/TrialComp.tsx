import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import LiveChatImg from "../images/Live-Chat-img.png";
const TrialComp: NextComponentType = () => {
  return (
    <>
      <section className="">
        <div className="innerDiv xl:max-w-[1216px]">
          <div className="overflow-hidden rounded-3xl bg-[url('../images/free-trial-bg.png')] lg:pl-16 md:pl-12 md:pr-0 lg:pt-20 pt-10 bg-cover lg:bg-no-repeat bg-center">
            <div className="flex flex-wrap sm:-mx-4">
              <div className="lg:w-1/2 w-full px-4">
              <div className="md:text-left text-center md:pr-3 md:pl-0 md:mb-0 mb-6" data-aos="fade-right">
                <h3 className="text-[#2B2866] font-[600] inter-display lg:text-[56px] lg:leading-[1] md:text-[42px] sm:text-4xl text-[32px] leading-[38px]">
                  Get started with Brandwise today
                </h3>
                <p className="text-[#475467] md:mt-5 mt-4 lg:mb-8 mb-5 md:text-lg text-sm font-medium">
                  Try Brandwise free for 7 days—you'll have access to every
                  feature. Cancel any time.
                </p>
                <div className="flex sm:flex-row flex-col gap-3">
                  <Link href={"#"} passHref>
                  <a className="md:inline-flex flex items-center justify-center gap-2 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[10px] pl-[14px] pr-[10px] theme-btn rounded-lg border-[1px] border-[solid] [border-image-source:linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0)_100%)] [box-shadow:0px_0px_0px_1px_#335CFF,_0px_1px_2px_0px_#0E121B3D]">
                    Start Free Trial
                    <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 5L12.5 10L7.5 15"
                      stroke="white"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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
              <div className="lg:w-1/2 w-full sm:px-4 pl-4">
                <div className="block-img lg:mt-0 mt-5" data-aos="fade-left">
                  <Image src={LiveChatImg} width={768} height={475} alt="" />
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
