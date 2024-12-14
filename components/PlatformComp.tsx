import { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import ModerationImg from "../images/moderation-img.png";
import RepliesImg from "../images/AIgenerated-replies-img.png";
import ObieImg from "../images/obie-img.png";
const PlatformComt: NextComponentType = () => {
  return (
    <>
      <section className="lg:py-24 md:py-20 sm:py-16 py-12">
        <div className="innerDiv">
          <div
            className="text-center lg:mb-24 md:mb-16 sm:mb-12 mb-8"
            data-aos="fade-up"
          >
            <h3 className="text-[rgba(43,40,102,1)] md:text-[56px] md:leading-[1] text-[32px] leading-[38px] font-[600] inter-display tracking-[-0.02em]">
              Every social platform in one place
            </h3>
            <p className="text-[16px] font-medium leading-[24px] tracking-[-0.011em] md:mt-6 mt-4 text-[#475467] lg:w-9/12 xl:w-1/2 mx-auto">
              Manage conversations, moderate comments, and craft responses from
              one place.
            </p>
          </div>
          <div className="flex flex-wrap sm:-mx-4 md:justify-center md:items-center">
            <div
              className="sm:px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full md:order-1 order-2"
              data-aos="fade-right"
            >
              <h4 className="md:mt-0 mt-5 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
                Boost your ROAS with Automated Moderation
              </h4>
              <ul className="flex flex-col gap-y-4">
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
                  <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                    Automatically hides negative comments and spam in real-time
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
                  <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                    24/7 coverage across ads and organic posts
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
                  <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                    Protects your ad spend from trolls
                  </span>
                </li>
              </ul>
              <div className="md:mt-8 mt-6">
                <Link href={"#"} passHref>
                  <a className="md:inline-flex flex items-center justify-center gap-1 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[10px] px-[10px] theme-btn rounded-lg border-[1px] border-[solid] [border-image-source:linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0)_100%)] [box-shadow:0px_0px_0px_1px_#335CFF,_0px_1px_2px_0px_#0E121B3D]">
                    Start Free Trial
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="text-white w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="sm:px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full md:order-2 order-1"
              data-aos="fade-left"
            >
              <Image
                src={ModerationImg}
                alt=""
                className="!block rounded-2xl"
              />
            </div>
          </div>
          <div className="lg:pt-16 pt-12">
            <div className="flex flex-wrap sm:-mx-4 md:justify-between md:items-center">
              <div
                className="sm:px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full"
                data-aos="fade-right"
              >
                <Image src={RepliesImg} alt="" className="!block rounded-2xl" />
              </div>
              <div
                className="sm:px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full"
                data-aos="fade-left"
              >
                <h4 className="md:mt-0 mt-5 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
                  Drive engagement with AI Generated Replies
                </h4>
                <ul className="flex flex-col gap-y-4">
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
                    <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                      Trained on custom information about your brand, products
                      or services
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
                    <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                      Consistently accurate, humanlike replies that match your
                      brand's tone
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
                    <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                      Learns and improves the more you use Brandwise over time
                    </span>
                  </li>
                </ul>
                <div className="md:mt-8 mt-6">
                  <Link href={"#"} passHref>
                    <a className="md:inline-flex flex items-center justify-center gap-1 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[10px] px-[10px] theme-btn rounded-lg border-[1px] border-[solid] [border-image-source:linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0)_100%)] [box-shadow:0px_0px_0px_1px_#335CFF,_0px_1px_2px_0px_#0E121B3D]">
                      Start Free Trial
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="text-white w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:pt-16 pt-12">
            <div className="flex flex-wrap sm:-mx-4 md:justify-center md:items-center">
              <div
                className="sm:px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full md:order-1 order-2"
                data-aos="fade-right"
              >
                <h4 className="md:mt-0 mt-5 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
                  Discover opportunities with Obie
                </h4>
                <ul className="flex flex-col gap-y-4">
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
                    <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                      AI assistant that performs analysis across thousands of
                      your brand's comments
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
                    <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                      Finds the most common FAQs and concerns in your ad
                      comments
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
                    <span className="text-[#0C111D] text-base tracking-[-0.011em]">
                      Provides insights on how to improve your marketing and
                      operations
                    </span>
                  </li>
                </ul>
                <div className="md:mt-8 mt-6">
                  <Link href={"#"} passHref>
                    <a className="md:inline-flex flex items-center justify-center gap-1 text-[14px] font-medium leading-[20px] tracking-[-0.006em] text-white py-[10px] px-[10px] theme-btn rounded-lg border-[1px] border-[solid] [border-image-source:linear-gradient(180deg,_rgba(255,_255,_255,_0.12)_0%,_rgba(255,_255,_255,_0)_100%)] [box-shadow:0px_0px_0px_1px_#335CFF,_0px_1px_2px_0px_#0E121B3D]">
                      Start Free Trial
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="text-white w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className="sm:px-4 xl:w-1/2 lg:w-1/2 md:w-1/2 w-full md:order-2 order-1"
                data-aos="fade-left"
              >
                <Image src={ObieImg} alt="" className="!block rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PlatformComt;
