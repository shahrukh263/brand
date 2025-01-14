import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import analyticsImg from "../images/help-analytics.svg";
import SmartLevelImg from "../images/smart-level-img.svg";
import ShopifyIntegration from "../images/shopify-integration-img.svg";
import AiSummariesImg from "../images/AI-Summaries-img.svg";
import twoWayTransationImg from "../images/two-way-translation-img.svg";
import TeamImg from "../images/team-img.svg";
const HelpSocialFeature: NextComponentType = () => {
  return (
    <>
      <section className="md:pb-24 sm:pb-16 pb-12">
        <div className="innerDiv xl:max-w-[1152px] xl:px-0">
          <h4
            data-aos="fade-up"
            className="text-[#2B2866] md:text-[40px] md:leading-10 text-[32px] leading-[38px] font-[600] inter-display tracking-[-0.005em] text-center md:mb-12 mb-8"
          >
            Some text goes here
          </h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-y-6">
            <div className="w-full h-full">
              <div
                data-aos="fade-up"
                className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full"
              >
                <Image
                  src={analyticsImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                  Analytics
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                  In-depth analytics for your entire organization and individual team members.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full">
                <Image
                  src={SmartLevelImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                  Smart Labels
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                  Conversation labels that get automatically assigned by AI using context.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full">
                <Image
                  src={ShopifyIntegration}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                  Shopify Integration
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                  View order info, shipping details, process refunds, and more without switching apps.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full">
                <Image
                  src={AiSummariesImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                  AI Summaries
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                  Get an instant recap of full length email and live chat conversations.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full">
                <Image
                  src={twoWayTransationImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                  2-way Translation
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                  Automatically translate incoming inquiries and outgoing replies to any language.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full">
                <Image src={TeamImg} alt="" className="rounded-t-3xl !block" />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em]">
                  Team Collaboration
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                  Real-time sync across the entire team with no additional costs per seat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HelpSocialFeature;
