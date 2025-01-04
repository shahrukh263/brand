import { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import WorkFlowImg from "../images/workflow-img.svg";
import AiImg from "../images/ai-img.svg";
import ThemeButton from "../ui/button";
const HelpPlatformComp: NextComponentType = () => {
  return (
    <>
      <section className="lg:py-24 bg-white md:py-20 sm:py-16 py-12 relative md:after:bg-[url('../images/social-platform-bg.png')] md:after:absolute md:after:right-0 md:after:top-0 md:after:w-1/2 md:after:h-[421px] md:after:bg-no-repeat md:after:bg-cover md:after:z-[1]">
        <div className="innerDiv">
          <div
            className="text-center lg:mb-24 md:mb-16 sm:mb-12 mb-8"
            data-aos="fade-up"
          >
            <h3 className="text-[rgba(43,40,102,1)] md:text-[56px] md:leading-[1] text-[32px] leading-[38px] font-[600] inter-display tracking-[-0.02em] mx-auto lg:max-w-[896px]">
            Boost team efficiency while delivering better customer service
            </h3>
            <p className="md:text-[16px] text-sm font-[400] md:leading-[24px] tracking-[-0.011em] md:mt-6 mt-4 text-[#475467] mx-auto">
            A better, faster, simpler helpdesk built around AI that actually saves you time
            </p>
          </div>
          <div className="xl:mx-auto xl:max-w-[1152px]">
          <div className="flex flex-wrap sm:-mx-4 md:justify-between md:items-center">
            <div
              className="sm:px-4 xl:w-5/12 lg:w-1/2 md:w-5/12 w-full md:order-1 order-2"
              data-aos="fade-right"
            >
              <div className="lg:pr-[10px]">
              <h4 className="md:mt-0 mt-6 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
              Simplify workflow with a unified inbox
              </h4>
              <ul className="flex flex-col md:gap-y-4 gap-y-3">
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#6962FB] w-5 h-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#0C111D] md:text-base text-sm tracking-[-0.011em] font-[400]">
                  Email, live chat, and social media in one place
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#6962FB] w-5 h-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#0C111D] md:text-base text-sm tracking-[-0.011em] font-[400]">
                  Real-time sync across the entire team
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[#6962FB] w-5 h-5 flex-shrink-0"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-[#0C111D] md:text-base text-sm tracking-[-0.011em] font-[400]">
                  View customer info and manage orders without switching apps
                  </span>
                </li>
              </ul>
              <div className="md:mt-8 mt-6">
                <Link href={"#"} passHref>
                  <ThemeButton className="md:w-auto">
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
                  </ThemeButton>
                </Link>
              </div>
              </div>
            </div>
            <div
              className="sm:px-4 xl:px-0 xl:w-[656px] lg:w-1/2 md:w-1/2 w-full md:order-2 order-1"
              data-aos="fade-left"
            >
              <Image
                src={WorkFlowImg}
                width={656} height={460} objectFit="cover"
                alt=""
                className="!block rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:pt-16 pt-12 xl:pt-24">
            <div className="flex flex-wrap xl:gap-x-8 lg:gap-x-8 md:gap-x-4 md:items-center">
              <div
                className="xl:w-[656px] lg:w-1/2 md:w-1/2 w-full"
                data-aos="fade-right"
              >
                <Image src={AiImg} alt="" width={656} height={460} objectFit="cover" className="!block rounded-2xl" />
              </div>
              <div
                className="xl:w-[38%] lg:w-5/12 md:w-5/12 w-full"
                data-aos="fade-left"
              >
               <div className="">
               <h4 className="md:mt-0 mt-6 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
               AI that not only makes you faster, but better
                </h4>
                <ul className="flex flex-col md:gap-y-4 gap-y-3">
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[#6962FB] w-5 h-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#0C111D] md:text-base text-sm tracking-[-0.011em] font-[400]">
                    Trained on custom information about your brand, products or services
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[#6962FB] w-5 h-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#0C111D] md:text-base text-sm tracking-[-0.011em] font-[400]">
                    Consistently accurate, humanlike replies that match your brand's tone
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-[#6962FB] w-5 h-5 flex-shrink-0"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-[#0C111D] md:text-base text-sm tracking-[-0.011em] font-[400]">
                    Learns and improves the more you use Brandwise over time
                    </span>
                  </li>
                </ul>
                <div className="md:mt-8 mt-6">
                  <Link href={"#"} passHref>
                  <ThemeButton className="md:w-auto">
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
                    </ThemeButton>
                  </Link>
                </div>
               </div>
              </div>
            </div>
          </div>
         
          </div>
        </div>
      </section>
    </>
  );
};
export default HelpPlatformComp;
