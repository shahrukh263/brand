import type { NextComponentType } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import PowerSurgeLogo from "../images/powersurge-logo.svg";
import StackedLogo from "../images/stacked-lab-logo.svg";
import GoodwellLogo from "../images/goodwell-logo.svg";
import UserImg from "../images/user-img.png";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper";

const TestimonialComp: NextComponentType = () => {
  return (
    <>
      <section className='lg:pt-24 lg:pb-24 md:py-20 sm:py-16 py-12 sm:bg-[url("../images/bg-testimonial.png")] bg-[url("../images/bg-testimonial-mobile.png")] bg-cover md:bg-top bg-bottom bg-no-repeat'>
        <div className="innerDiv">
          <div className="text-center md:mb-12 mb-4" data-aos="fade-up">
            <h3 className="text-[rgba(43,40,102,1)] md:text-[56px] md:leading-[1] text-[32px] leading-[38px] font-[600] inter-display tracking-[-0.02em] 2xl:w-7/12 xl:w-[62%] lg:w-8/12 md:w-10/12 sm:w-10/12 mx-auto">
              Trusted by fast growing companies around the world
            </h3>
            <p className="md:text-[16px] text-sm font-[400] md:leading-[24px] tracking-[-0.011em] md:mt-6 mt-4 text-[#475467]">
              Here's what they have to say about Brandwise
            </p>
          </div>
          <div className="xl:max-w-[1152px] xl:mx-auto">
          <Swiper
            className="mySwiper"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              // when window width is >= 640px
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2.1,
                spaceBetween: 24,
              },
              // when window width is >= 1024
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            <SwiperSlide>
              <div className="bg-white border border-[rgba(228,231,236,1)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.02),_0px_12px_16px_-4px_rgba(16,24,40,0.04)] rounded-2xl p-8 my-4 h-full">
                <Image src={PowerSurgeLogo} alt="" />
                <p className="text-[#475467] text-base tracking-[-0.011em] mt-3">
                  Brandwise has been a lifesaver for our team—everything we need
                  is right at our fingertips, and it helps us jump right into
                  new design projects.
                </p>
                <div className="mt-12 flex items-center gap-x-3">
                  <div className="flex-shrink-0">
                    {/* <Image
                      src={UserImg}
                      width={48}
                      height={48}
                      objectFit="cover"
                      alt=""
                      className="img-block rounded-full  opacity-[0.08px]"
                    /> */}
                    <div className="w-12 h-12 rounded-full gradient1 flex justify-center items-center">
                      <span className="font-[800] text-base tracking-[0.03em]">
                        NG
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#0C111D] font-[400] text-base tracking-[-0.011em]">
                      Nikolas Gibbons
                    </h4>
                    <p className="text-[#475467] text-base tracking-[-0.011em] font-[300]">
                      Product Designer, Powersurge
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white border border-[rgba(228,231,236,1)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.02),_0px_12px_16px_-4px_rgba(16,24,40,0.04)] rounded-2xl p-8  my-4 h-full">
                <Image src={StackedLogo} alt="" width={132} height={32} />
                <p className="text-[#475467] text-base mt-3">
                  Our workflow has improved dramatically since we started using
                  Brandwise and it’s become an integral part of our workflow.
                  It's easy to use, and the resources are top-notch. I recommend
                  it to everyone!
                </p>
                <div className="mt-12 flex items-center gap-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full gradient2 flex justify-center items-center">
                      <span className="font-[800] text-base tracking-[0.03em]">
                        ML
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#0C111D] font-[400] text-base tracking-[-0.011em]">
                      Mathilde Lewis
                    </h4>
                    <p className="text-[#475467] text-base tracking-[-0.011em] font-[300]">
                      Project Lead, Stack3d Lab
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white border border-[rgba(228,231,236,1)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.02),_0px_12px_16px_-4px_rgba(16,24,40,0.04)] rounded-2xl p-8 my-4 h-full">
                <Image src={GoodwellLogo} alt="" />
                <p className="text-[#475467] text-base tracking-[-0.011em] mt-3">
                  Brandwise is our secret weapon for staying ahead of deadlines.
                  It gives us everything we need to get started quickly.
                </p>
                <div className="mt-12 flex items-center gap-x-3">
                  <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient3 flex justify-center items-center">
                      <span className="font-[800] text-base tracking-[0.03em]">
                      AF
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[#0C111D] font-[400] text-base tracking-[-0.011em]">
                      Ammar Foley
                    </h4>
                    <p className="text-[#475467] text-base tracking-[-0.011em] font-[300]">
                      UX Designer, Goodwell
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialComp;
