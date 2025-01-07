import { NextComponentType } from "next";
import Link from "next/link";
import Image from "next/image";
import HelpDeskImg from "../images/helpdesk-img.svg";
import SocialInboxImg from "../images/social-inbox-img.svg";
import ThemeButton from "../ui/button";
const HomePlatformComp: NextComponentType = () => {
  return (
    <>
      <section className="lg:py-24 bg-white md:py-20 sm:py-16 py-12 relative md:after:bg-[url('../images/social-platform-bg.png')] md:after:absolute md:after:right-0 md:after:top-0 md:after:w-1/2 md:after:h-[421px] md:after:bg-no-repeat md:after:bg-cover md:after:z-[1]">
        <div className="innerDiv">
          <div className="xl:mx-auto xl:max-w-[1152px]">
            <div className="flex flex-wrap sm:-mx-4 md:justify-between md:items-center relative z-[2]">
              <div
                className="sm:px-4 xl:w-5/12 lg:w-1/2 md:w-5/12 w-full md:order-1 order-2"
                data-aos="fade-right"
              >
                <div className="lg:pr-[10px]">
                  <h4 className="md:mt-0 mt-6 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
                    Save hours with our AI-powered Helpdesk
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
                        Boost efficiency with a simple, organized inbox for
                        email and live chat
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
                        Resolve tickets automatically with a personalized AI
                        agent trained on your brand data
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
                        Integrates with Shopify for real-time customer info and
                        order management
                      </span>
                    </li>
                  </ul>
                  <div className="flex sm:flex-row flex-col gap-5 mb-2 md:mt-8 mt-6">
                        <Link href={"#"} passHref>
                          <ThemeButton className="md:w-auto">
                            Explore Social Inbox
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
                        <Link href={"#"} passHref>
                          <a className="inline-block py-[10px] px-[14px] rounded-lg text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                          Start Free Trial
                          </a>
                        </Link>
                      </div>
                </div>
              </div>
              <div
                className="sm:px-4 xl:px-0 xl:w-[656px] lg:w-1/2 md:w-1/2 w-full md:order-2 order-1"
                data-aos="fade-left"
              >
                <Image
                  src={HelpDeskImg}
                  width={656}
                  height={460}
                  objectFit="cover"
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
                  <Image
                    src={SocialInboxImg}
                    alt=""
                    width={656}
                    height={460}
                    objectFit="cover"
                    className="!block rounded-2xl"
                  />
                </div>
                <div
                  className="xl:w-[38%] lg:w-5/12 md:w-5/12 w-full"
                  data-aos="fade-left"
                >
                  <div className="">
                    <h4 className="md:mt-0 mt-6 text-[#2B2866] lg:text-[40px] font-[600] inter-display tracking-[-0.02em] lg:leading-[1] md:text-3xl text-2xl md:mb-8 mb-6">
                      Convert more customers with our Al-powered Social Inbox
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
                          Manage all comments and DMs from FB, IG, and TikTok in
                          one place
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
                          Automatically hides negative and spam comments on ads
                          and organic posts
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
                          Automatic, humanlike AI replies to reach every
                          potential customer before it's too late
                        </span>
                      </li>
                    </ul>
                      <div className="flex sm:flex-row flex-col gap-5 mb-2 md:mt-8 mt-6">
                        <Link href={"#"} passHref>
                          <ThemeButton className="md:w-auto">
                            Explore Social Inbox
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
                        <Link href={"#"} passHref>
                          <a className="inline-block py-[10px] px-[14px] rounded-lg text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                          Start Free Trial
                          </a>
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
export default HomePlatformComp;
