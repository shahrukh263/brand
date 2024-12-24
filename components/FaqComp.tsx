import type { NextComponentType } from "next";
import Image from "next/image";
import { useState } from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";
const FaqComp: NextComponentType = () => {
  return (
    <>
      <section className="lg:py-24 md:py-20 sm:py-16 py-12">
        <div className="innerDiv">
          <div className="text-center md:mb-16 mb-8" data-aos="fade-up">
            <h4 className="text-[#2B2866] font-[600] lg:text-[56px] lg:leading-[1] md:text-[48px] md:leading-[1.2] sm:text-[42px] sm:leading-[1.3] text-[32px] leading-[38px] inter-display">
              Frequently asked questions
            </h4>
            <p className="mt-6 mx-auto lg:w-8/12 xl:w-7/12 md:w-9/12 w-full text-[#475467] sm:text-base text-sm font-medium tracking-[-0.006em]">
              Find answers to your questions right here, and don't hesitate to{" "}
              <a className="underline">contact us</a> if you couldn't find what
              you're looking for.
            </p>
          </div>
          <div className="lg:max-w-[768px] md:mx-auto md:w-9/12">
          <Accordion data-aos="fade-up" className="accordian-main w-full">
            <AccordionItem initialEntered className={'border-b border-b-[#E4E7EC] mb-7 pb-7'} 
             header={
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={'text-[#0C111D] sm:text-lg text-base font-medium tracking-[-0.006em]'}>Is there a free trial available?</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 minus-icon-accordian"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 plus-icon-accordian"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
              </div>
            }>
              <p className="text-[#475467] sm:text-base text-sm tracking-[-0.011em] mt-2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </AccordionItem>
            <AccordionItem className={'border-b border-b-[#E4E7EC] mb-7 pb-7'} 
             header={
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={'text-[#0C111D] sm:text-lg text-base font-medium tracking-[-0.006em] text-left'}>Can I change my plan later?</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 minus-icon-accordian"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 plus-icon-accordian"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
              </div>
            }>
              <p className="text-[#475467] sm:text-base text-sm tracking-[-0.011em] mt-2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </AccordionItem>
            <AccordionItem className={'border-b border-b-[#E4E7EC] mb-7 pb-7'} 
             header={
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={'text-[#0C111D] sm:text-lg text-base font-medium tracking-[-0.006em] text-left'}>What is your cancellation policy?</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 minus-icon-accordian"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 plus-icon-accordian"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
              </div>
            }>
              <p className="text-[#475467] sm:text-base text-sm tracking-[-0.011em] mt-2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </AccordionItem>
            <AccordionItem className={'border-b border-b-[#E4E7EC] mb-7 pb-7'} 
             header={
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={'text-[#0C111D] sm:text-lg text-base font-medium tracking-[-0.006em] text-left'}>Can other info be added to an invoice?</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 minus-icon-accordian"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 plus-icon-accordian"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
              </div>
            }>
              <p className="text-[#475467] sm:text-base text-sm tracking-[-0.011em] mt-2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </AccordionItem>
            <AccordionItem className={'border-b border-b-[#E4E7EC] mb-7 pb-7'} 
             header={
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={'text-[#0C111D] sm:text-lg text-base font-medium tracking-[-0.006em] text-left'}>How does billing work?</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 minus-icon-accordian"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 plus-icon-accordian"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
              </div>
            }>
              <p className="text-[#475467] sm:text-base text-sm tracking-[-0.011em] mt-2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </AccordionItem>
            <AccordionItem className={'border-b border-b-[#E4E7EC] mb-7 pb-7'} 
             header={
              <div className="flex justify-between items-center cursor-pointer">
                <h4 className={'text-[#0C111D] sm:text-lg text-base font-medium tracking-[-0.006em] text-left'}>How do I change my account email?</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 minus-icon-accordian"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 plus-icon-accordian"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
              </div>
            }>
              <p className="text-[#475467] sm:text-base text-sm tracking-[-0.011em] mt-2">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </AccordionItem>
          </Accordion>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default FaqComp;
