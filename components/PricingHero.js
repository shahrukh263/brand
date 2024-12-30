"use-client";
import DataIcon from "../images/database-icon.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import * as React from "react";
import { Range } from "react-range";
import { useWindowSize } from "../hooks/useWIndowSize";
import ThemeButton from '../ui/button'
const formatter = new Intl.NumberFormat("en-US");

const SLABS = [
  { slab: 5, value: 100, mobile: true },
  { slab: 15, value: 250 },
  { slab: 25, value: 500 },
  { slab: 35, value: 1000 },
  { slab: 45, value: 2500, mobile: true },
  { slab: 55, value: 5000 },
  { slab: 65, value: 10000 },
  { slab: 75, value: 15000, mobile: true },
  { slab: 85, value: 20000 },
  { slab: 95, value: 25000, mobile: true },
];
const getRange = (value) => {
  const currentSlabIndex = SLABS.findIndex(({ slab }) => value <= slab);
  const previousSlabValue = SLABS[currentSlabIndex - 1]?.value || 0;
  const currentSlabValue = SLABS[currentSlabIndex]?.value || SLABS.at(-1).value;
  const currentSlab = SLABS[currentSlabIndex]?.slab || SLABS.at(-1).slab;
  const totalSteps = currentSlab === 5 ? 5 : 10;
  let remainder =
    currentSlab === 5
      ? value
      : value - ((SLABS[currentSlabIndex]?.slab || SLABS.at(-1).slab) - 10);
  const valuePerRemainder = (currentSlabValue - previousSlabValue) / totalSteps;

  return previousSlabValue + valuePerRemainder * remainder;
};
const convertValueToSlab = (value) => {
  const slabIndex = SLABS.findIndex((slab) => value <= slab.value);
  const slab = SLABS[slabIndex];
  return slab.slab;
};
const PricingHero = () => {
  const [values, setValues] = useState([convertValueToSlab(2500)]);
  const [openTab, setOpenTab] = useState(1);
  const { width } = useWindowSize();
  const IS_DESKTOP = width >= 768;
  const currentSlabIndex = SLABS.findIndex(({ slab }) => values[0] <= slab);
  const IS_MAX_TICKETS_SELECTED = values[0] >= SLABS.at(-1).slab;
  return (
    <>
      <section className="pt-12 pb-12 md:pt-24 md:pb-24 relative bg-white  bg-[url('../images/price-hero-bg.png')] bg-cover bg-bottom">
        <div className="innerDiv">
          <div className="text-center" data-aos="fade-up">
            <h1 className="font-[600] lg:text-[72px] md:text-[60px] text-[40px] leading-[1] text-[#2B2866] tracking-[-0.02em] inter-display">
              Simple, transparent pricing
            </h1>
            <p className="text-[#475467] md:text-base text-sm font-[400] mt-5">
              Every feature and unlimited team members on every plan.
            </p>
            <p className="text-[#475467] md:text-base text-sm font-[400] mt-1">
              Only pay based on AI usage.
            </p>
          </div>
          <div className="lg:mt-[80px] md:mt-[60px] sm:mt-[42px] mt-[32px]">
            <h2
              data-aos="fade-up"
              className="mb-6 text-center md:text-[24px] md:leading-[32px] text-[20px] leading-[28px] font-[600] text-[#2B2866] tracking-[-0.02em] inter-display sm:px-0 px-6"
            >
              I have{" "}
              <span className="bg-[#F4F4FF] rounded-[8px] text-[#6962FB] sm:py-[4px] py-[2px] sm:px-[8px] px-[6px] min-w-[93px] inline-block">
                {formatter.format(
                  getRange(
                    IS_MAX_TICKETS_SELECTED ? SLABS.at(-1).slab : values[0]
                  )
                )}
                {IS_MAX_TICKETS_SELECTED && "+"}
              </span>{" "}
              support tickets per month on average
            </h2>
            <div className="mx-auto md:w-9/12 w-full md:mb-[48px] mb-8">
              <div className="relative">
                {/* <input
                  type="range"
                  min="0"
                  max="1000000"
                  value={value}
                  className="single-thumb w-full h-3"
                  onChange={handleChange}
                /> */}

                <div className="relative lg:max-w-[768px] mx-auto z-10">
                  <Range
                    step={1}
                    min={0}
                    max={100}
                    values={values}
                    onChange={(values) => setValues(values)}
                    renderTrack={({ props, children }) => (
                      <div
                        className="thumb-slider"
                        {...props}
                        style={{
                          ...props.style,
                          height: "12px",
                          width: "100%",
                          backgroundColor: "#ccc",
                          borderRadius: "8px",
                        }}
                      >
                        {children}
                        <div
                          className="absolute left-0 selected-area"
                          style={{
                            width: ((values / 100) * 100).toFixed(2) + "%",
                          }}
                        ></div>
                        {/* <div className="absolute top-5" style={{left:((values/25000) * 100).toFixed(2)-2 + "%"}}>{values}</div> */}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        {...props}
                        key={props.key}
                        style={{
                          ...props.style,
                          height: "24px",
                          width: "24px",
                          backgroundColor: "#ffffff",
                          borderRadius: "20px",
                          border: "2px solid #6962FB",
                          outline: "none",
                          zIndex: "2",
                        }}
                      />
                    )}
                  />
                </div>

                <div className="pt-6 flex justify-between overflow-x-auto lg:max-w-[768px] mx-auto">
                  {SLABS.map(({ value, mobile }, i) => (
                    <span
                      key={value}
                      className={` w-[100px] text-center text-[8px] md:text-sm relative after:bg-[#E4E7EC] after:w-[1px] after:h-[12px] after:absolute after:left-[50%] after:translate-x-[-50%] md:after:bottom-[27px] after:bottom-[18px] ${
                        i < currentSlabIndex || currentSlabIndex === -1
                          ? "text-[#98A2B3]"
                          : ""
                      }`}
                    >
                      {mobile || IS_DESKTOP ? formatter.format(value) : null}
                      {i === SLABS.length - 1 && "+"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:pb-[48px] pb-8 md:mb-[48px] mb-8 border-b">
              <div className="text-center">
                <ul className="bg-[#F2F4F7] rounded-[12px] py-[4px] px-[4px] inline-flex items-center gap-[4px] mb-6">
                  <li>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      className={
                        "cursor-pointer text-[14px] leading-[20px] font-[500] tracking-[-0.006em] rounded-[8px] py-[6px] px-[12px] inline-block " +
                        (openTab === 1
                          ? "bg-white text-[#0C111D]"
                          : "text-[#475467]")
                      }
                    >
                      Monthly{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      className={
                        "cursor-pointer text-[14px] leading-[20px] font-[500] tracking-[-0.006em] rounded-[8px] py-[6px] px-[12px] inline-block " +
                        (openTab === 2
                          ? "bg-white text-[#0C111D]"
                          : "text-[#475467]")
                      }
                    >
                      Yearly{" "}
                      <span className="text-[12px] text-white bg-[#17B26A] rounded-[4px] inline-block px-[4px] py-[1px] leading-[16px]">
                        2 Months Free
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <div className={openTab === 1 ? "block" : "hidden"}>
                  <div className="flex flex-wrap xl:-mx-3 sm:-mx-2 lg:gap-y-0 gap-y-6">
                    <div className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                      <div
                        data-aos="fade-up"
                        className="pricing-box rounded-[16px] bg-white xl:p-8 p-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                      >
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Start
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for personal use
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] tracking-[-0.02em] leading-[1] inter-display">
                            $49
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a className="text-[#525866] cursor-pointer text-[14px] tracking-[-0.006em] font-[400] leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                          Start 7-day Free Trial
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            5,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full"
                    >
                      <div className="relative pricing-box rounded-[16px] bg-white xl:p-8 p-6 border-2 border-[#6962FB] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                        <span className="absolute right-3 top-3 font-[400] tracking-[-0.006em] text-sm text-[#6962FB] inline-block py-1 px-3 border border-[#C3C1FD] rounded-lg bg-[#F4F4FF]">
                          Recommended
                        </span>
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Pro
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for small teams
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $99
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a>
                          <ThemeButton className="">
                            Start 7-day Free Trial
                          </ThemeButton>
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            10,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full"
                    >
                      <div className="pricing-box rounded-[16px] bg-white xl:p-8 p-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Scale
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for mid-sized teams
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $179
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a className="text-[#525866] cursor-pointer text-[14px] tracking-[-0.006em] font-[400] leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                          Start 7-day Free Trial
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            20,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                      <div
                        data-aos="fade-up"
                        className="pricing-box rounded-[16px] bg-white xl:p-8 p-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                      >
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Enterprise
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for many large teams
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $269
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a className="text-[#525866] cursor-pointer text-[14px] tracking-[-0.006em] font-[400] leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                          Start 7-day Free Trial
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            30,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"}>
                  <div className="flex flex-wrap xl:-mx-3 sm:-mx-2 lg:gap-y-0 gap-y-6">
                    <div className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                      <div
                        data-aos="fade-up"
                        className="pricing-box rounded-[16px] bg-white xl:p-8 p-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                      >
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Start
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for personal use
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $49
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a className="text-[#525866] cursor-pointer text-[14px] tracking-[-0.006em] font-[400] leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                          Start 7-day Free Trial
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            5,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full"
                    >
                      <div className="relative pricing-box rounded-[16px] bg-white xl:p-8 p-6 border-2 border-[#6962FB] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                        <span className="absolute right-3 top-3 font-[400] tracking-[-0.006em] text-sm text-[#6962FB] inline-block py-1 px-3 border border-[#C3C1FD] rounded-lg bg-[#F4F4FF]">
                          Recommended
                        </span>
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Pro
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for small teams
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $99
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a>
                          <ThemeButton className="">
                            Start 7-day Free Trial
                          </ThemeButton>
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            10,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      data-aos="fade-up"
                      className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full"
                    >
                      <div className="pricing-box rounded-[16px] bg-white xl:p-8 p-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]">
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Scale
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for mid-sized teams
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $179
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a className="text-[#525866] cursor-pointer text-[14px] tracking-[-0.006em] font-[400] leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                          Start 7-day Free Trial
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            20,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:px-3 sm:px-2 lg:w-1/4 md:w-1/2 sm:w-1/2 w-full">
                      <div
                        data-aos="fade-up"
                        className="pricing-box rounded-[16px] bg-white xl:p-8 p-6 border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]"
                      >
                        <div className="mb-6">
                          <h4 className="text-[rgba(43,40,102,1)] text-[18px] font-font-[400] tracking-[-0.006em] mb-1 leading-[28px]">
                            Enterprise
                          </h4>
                          <p className="text-[rgba(71,84,103,1)] text-[14px] tracking-[-0.006em] leading-[20px] font-[300]">
                            Best for many large teams
                          </p>
                        </div>
                        <div className="flex gap-[8px] mb-6">
                          <h2 className="text-[#2B2866] xl:text-[40px] text-[36px] font-[500] inter-display tracking-[-0.02em] leading-[1]">
                            $269
                          </h2>
                          <div>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em]">
                              USD / mo
                            </p>
                            <p className="text-[#525252] text-sm font-[400] tracking-[-0.006em] mt-[1px]">
                              Billed monthly
                            </p>
                          </div>
                        </div>
                        <a className="text-[#525866] cursor-pointer text-[14px] tracking-[-0.006em] font-[400] leading-[20px] py-[10px] block w-full px-3 text-center rounded-[10px] [box-shadow:0px_0px_0px_1px_rgba(225,228,234,1),_0px_1px_3px_0px_rgba(14,18,27,.12)]">
                          Start 7-day Free Trial
                        </a>
                        <div className="mt-6 flex items-center gap-[8px] md:justify-center">
                          <Image src={DataIcon} alt="" />
                          <span className="text-[16px] text-[#0C111D] font-[400] tracking-[-0.017em] leading-[24px]">
                            30,000 AI monthly credits
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center" data-aos="fade-up">
              <h4 className="text-[#2B2866] md:text-[24px] text-[20px] md:leading-[32px] leading-[28px] font-[600] inter-display md:tracking-[-0.02em] tracking-[-0.01em] mb-4">
                Have questions or want to build a custom plan for your store?
              </h4>
              <Link href={"#"} passHref>
                <a className="inline-block p-[10px] rounded-lg text-[#475467] text-[14px] font-[400] leading-[20px] tracking-[-0.006em] [box-shadow:0px_0px_0px_1px_#E1E4EA,_0px_1px_3px_0px_#0E121B1F] bg-white">
                  Contact Sales
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PricingHero;
