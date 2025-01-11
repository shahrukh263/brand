import type { NextComponentType } from "next";
import HeroImg from "../images/hero-home.svg";
import Image from "next/image";
import Link from "next/link";
import ThemeButton from "../ui/button";
const HelpDeskHero: NextComponentType = () => {
  return (
    <>
      <section className="md:mb-16 pt-12 md:pt-20 relative sm:bg-[url('../images/social-hero-bg.png')] bg-[url('../images/social-hero-mobile-bg.png')] bg-cover bg-no-repeat bg-bottom">
        <div className="innerDiv">
          <div className="text-center" data-aos="fade-up">
            <p className="uppercase text-xs font-[400] tracking-[0.04em] text-[#5650CD] mb-8">
              multichannel helpdesk
            </p>
            <h1 className="font-[600] inter-display lg:text-[72px] md:text-[60px] text-[40px] leading-[1] text-[#2B2866] tracking-[-0.02em] lg:w-9/12 mx-auto">
              Reduce response times with our AI-powered Helpdesk
            </h1>
            <p className="text-[#475467] md:text-base text-sm tracking-[-0.011em] font-[400] mt-5 mb-8">
            Automate up to 70% of customer inquiries by empowering your team with a helpdesk built for AI.
            </p>
            <div className="flex sm:flex-row flex-col gap-5 justify-center mb-2">
              <Link href={"#"} legacyBehavior>
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
              <Link href={"#"} legacyBehavior>
                <a className="inline-block py-[10px] px-[14px] rounded-lg text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                  Book a Demo
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="mt-7 md:mt-0 text-center">
            <Image src={HeroImg} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};
export default HelpDeskHero;
