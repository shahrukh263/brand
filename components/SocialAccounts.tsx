import type { NextComponentType } from "next";
import Image from "next/image";
import SocialImg from "../images/social-img.png";
const SocialAccounts: NextComponentType = () => {
  return (
    <>
      <section className="lg:pt-24 md:pt-20 sm:py-16 pt-12 md:pb-4 bg-[url('../images/feature-bg.png')] md:bg-top bg-cover bg-center">
        <div className="innerDiv xl:max-w-[1152px] xl:px-[11px]">
          <div className="text-center" data-aos="fade-up">
          <Image src={SocialImg} alt=""/>
          </div>
          <h3 data-aos="fade-up" className="md:text-[56px] md:leading-[1] text-[32px] leading-[38px] font-[600] tracking-[-0.02em] text-[#2B2866] text-center md:mb-6 mb-4 inter-display">
          Every channel in one place
          </h3>
          <p data-aos="fade-up" className="md:text-[16px] text-sm font-[400] md:leading-[24px] tracking-[-0.011em] md:mt-6 mt-4 text-[#475467] text-center">Some text goes here...</p>
        </div>
      </section>
    </>
  );
};

export default SocialAccounts;
