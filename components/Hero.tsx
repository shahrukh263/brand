import type { NextComponentType } from "next";
import HeroImg from "../images/hero-home.svg";
import HeroMobileImg from "../images/home-hero-mobile.png";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "../ui/button";
const HomeHero: NextComponentType = () => {
  return (
    <>
      <section className="md:mb-16 pt-12 md:pt-24 relative sm:bg-[url('../images/social-hero-bg.png')] bg-[url('../images/social-hero-mobile-bg.png')] bg-cover bg-no-repeat bg-bottom">
        <div className="innerDiv lg:max-w-[896px] lg:px-0 mx-auto">
          <div className="text-center" data-aos="fade-up">
            <p className="uppercase sm:text-xs text-[9px] font-[400] tracking-[0.04em] text-[#5650CD] mb-8 bg-[#F4F4FF] border border-[#C3C1FD] inline-flex py-[5px] pl-3 pr-1 items-center gap-[6px] rounded-full text-left">
              <span>Some text about new update can go here</span>
              <svg
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="28"
                  height="18"
                  rx="9"
                  fill="#C3C1FD"
                  fillOpacity="0.5"
                />
                <path
                  d="M9.33325 9.00016H18.6666M18.6666 9.00016L15.9999 11.6668M18.6666 9.00016L15.9999 6.3335"
                  stroke="#5650CD"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
            <h1 className="font-[600] inter-display lg:text-[72px] md:text-[60px] text-[40px] leading-[1] text-[#2B2866] tracking-[-0.02em] relative mx-auto">
              Provide instant <span className="lg:block">customer service with AI </span>
              <span className="absolute md:bottom-5 bottom-3 lg:right-[-5px]">
                <svg
                  className="inline-block md:w-10 md:h-10"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 1.25C15.3507 1.25 15.6546 1.49305 15.7317 1.83518C16.1906 3.87273 16.7939 5.21587 17.7319 6.17324C18.6681 7.12879 20.0223 7.7857 22.1648 8.26833C22.507 8.3454 22.75 8.64929 22.75 9C22.75 9.35071 22.507 9.6546 22.1648 9.73167C20.1273 10.1906 18.7841 10.7939 17.8268 11.7319C16.8712 12.6681 16.2143 14.0223 15.7317 16.1648C15.6546 16.507 15.3507 16.75 15 16.75C14.6493 16.75 14.3454 16.507 14.2683 16.1648C13.8094 14.1273 13.2061 12.7841 12.2681 11.8268C11.3319 10.8712 9.97772 10.2143 7.83518 9.73167C7.49305 9.6546 7.25 9.35071 7.25 9C7.25 8.64929 7.49305 8.3454 7.83518 8.26833C9.97772 7.7857 11.3319 7.12879 12.2681 6.17324C13.2061 5.21587 13.8094 3.87273 14.2683 1.83518C14.3454 1.49305 14.6493 1.25 15 1.25Z"
                    fill="#6962FB"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 11.25C7.35071 11.25 7.6546 11.493 7.73167 11.8352C8.07203 13.3462 8.5283 14.2678 9.16908 14.8956C9.81169 15.5252 10.726 15.9442 12.1648 16.2683C12.507 16.3454 12.75 16.6493 12.75 17C12.75 17.3507 12.507 17.6546 12.1648 17.7317C10.6538 18.072 9.73222 18.5283 9.10439 19.1691C8.47478 19.8117 8.05578 20.726 7.73167 22.1648C7.6546 22.507 7.35071 22.75 7 22.75C6.64929 22.75 6.3454 22.507 6.26833 22.1648C5.92797 20.6538 5.4717 19.7322 4.83092 19.1044C4.18831 18.4748 3.27403 18.0558 1.83518 17.7317C1.49305 17.6546 1.25 17.3507 1.25 17C1.25 16.6493 1.49305 16.3454 1.83518 16.2683C3.34615 15.928 4.26778 15.4717 4.89561 14.8309C5.52522 14.1883 5.94422 13.274 6.26833 11.8352C6.3454 11.493 6.64929 11.25 7 11.25Z"
                    fill="#6962FB"
                  />
                </svg>
              </span>
            </h1>
            <p className="text-[#475467] md:text-base text-sm tracking-[-0.011em] font-[400] mt-5 mb-8 mx-auto lg:w-[97%]">
              Automate up to 70% of customer inquiries across every channel.
              Improve team efficiency, deliver exceptional service, and convert
              more customers with AI that not only makes you faster, but better.
            </p>
            <div className="flex sm:flex-row flex-col gap-5 justify-center mb-2">
              <Link href={"#"} passHref>
                <ThemeButton className="w-auto">
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
              <Link href={"#"} passHref>
                <a className="inline-block py-[10px] px-[14px] rounded-lg text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                  Book a Demo
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="sm:block hidden text-center">
            <Image src={HeroImg} alt="" />
          </div>
          <div className="sm:hidden block mt-7 text-center">
            <Image src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default HomeHero;
