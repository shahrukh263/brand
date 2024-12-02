import type { NextComponentType } from "next";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import PowerSurgeLogo from "../images/powersurge-logo.svg";
import StackedLogo from "../images/stacked-lab-logo.png";
import GoodwellLogo from "../images/goodwell-logo.png";
import UserImg from "../images/user-img.png";
// Import Swiper styles
import "swiper/css";

const TestimonialComp: NextComponentType = () => {
  return (
    <>
      <section className='lg:py-24 md:py-20 sm:py-16 py-12 bg-[url("../images/bg-testimonial.png")] bg-cover'>
        <div className="innerDiv">
          <div className="text-center mb-16" data-aos="fade-up">
            <h3 className="text-[rgba(43,40,102,1)] md:text-[56px] md:leading-[1] text-[32px] leading-[38px] font-[800] tracking-[-0.02em] 2xl:w-7/12 xl:w-8/12 lg:w-8/12 md:w-9/12 sm:w-9/12 mx-auto">
              Trusted by fast growing companies around the world
            </h3>
            <p className="text-[16px] font-medium leading-[24px] tracking-[-0.011em] mt-6">
              Here's what they have to say about Brandwise
            </p>
          </div>
          <Swiper
            className="mySwiper"
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
              <div className="bg-white border border-[rgba(228,231,236,1)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.02),_0px_12px_16px_-4px_rgba(16,24,40,0.04)] rounded-2xl p-8">
                <Image src={PowerSurgeLogo} alt="" />
                <p className="text-[#475467] text-base tracking-[-0.011em] mt-3">
                  Brandwise has been a lifesaver for our team—everything we need
                  is right at our fingertips, and it helps us jump right into
                  new design projects.
                </p>
                <div className="mt-12 flex items-center gap-x-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={UserImg}
                      width={48}
                      height={48}
                      objectFit="cover"
                      alt=""
                      className="img-block rounded-full  opacity-[0.08px]"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#0C111D] font-[500] text-base tracking-[-0.011em]">
                      Nikolas Gibbons
                    </h4>
                    <p className="text-[#475467] text-base tracking-[-0.011em]">
                      Product Designer, Powersurge
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white border border-[rgba(228,231,236,1)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.02),_0px_12px_16px_-4px_rgba(16,24,40,0.04)] rounded-2xl p-8">
                <Image src={StackedLogo} alt="" />
                <p className="text-[#475467] text-base tracking-[-0.011em] mt-3">
                Our workflow has improved dramatically since we started using Brandwise and it’s become an integral part of our workflow. It's easy to use, and the resources are top-notch. I recommend it to everyone!
                </p>
                <div className="mt-12 flex items-center gap-x-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={UserImg}
                      width={48}
                      height={48}
                      objectFit="cover"
                      alt=""
                      className="img-block rounded-full  opacity-[0.08px]"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#0C111D] font-[500] text-base tracking-[-0.011em]">
                    Mathilde Lewis
                    </h4>
                    <p className="text-[#475467] text-base tracking-[-0.011em]">
                    Project Lead, Stack3d Lab
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white border border-[rgba(228,231,236,1)] shadow-[0px_4px_6px_-2px_rgba(16,24,40,0.02),_0px_12px_16px_-4px_rgba(16,24,40,0.04)] rounded-2xl p-8">
                <Image src={GoodwellLogo} alt="" />
                <p className="text-[#475467] text-base tracking-[-0.011em] mt-3">
                Brandwise is our secret weapon for staying ahead of deadlines. It gives us everything we need to get started quickly.
                </p>
                <div className="mt-12 flex items-center gap-x-3">
                  <div className="flex-shrink-0">
                    <Image
                      src={UserImg}
                      width={48}
                      height={48}
                      objectFit="cover"
                      alt=""
                      className="img-block rounded-full  opacity-[0.08px]"
                    />
                  </div>
                  <div>
                    <h4 className="text-[#0C111D] font-[500] text-base tracking-[-0.011em]">
                    Ammar Foley
                    </h4>
                    <p className="text-[#475467] text-base tracking-[-0.011em]">
                    UX Designer, Goodwell
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialComp;
