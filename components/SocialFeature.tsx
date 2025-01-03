import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import analyticsImg from "../images/analytics-img.svg";
import DmMentionsImg from "../images/DM-mentions-img.svg";
import postViewerImg from "../images/post-viewer-img.svg";
import TranslationImg from "../images/translation-img.svg";
import BlackListImg from "../images/blacklist-img.svg";
import bulkImg from "../images/bulk-actions-img.svg";
const SocialFeature: NextComponentType = () => {
  return (
    <>
      <section className="lg:pb-[160px] md:pb-20 sm:pb-16 pb-12">
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
                    In-depth analytics across all social pages and individual
                    team members.
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
                  src={DmMentionsImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    DMs & Mentions
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                    Monitor comments, mentions, and DMs across every platform in
                    one place.
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
                  src={postViewerImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    Post Viewer
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                    View the full post and comment threads without switching
                    apps.
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
                  src={TranslationImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    2-way Translation
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                    Automatically translate incoming comments and replies to any
                    language.
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
                  src={BlackListImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    Blacklist
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                    Automatically hide comments containing certain words or
                    phrases.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full h-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] h-full">
                <Image src={bulkImg} alt="" className="rounded-t-3xl !block" />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em]">
                    Bulk Actions
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] font-[400]">
                    Select several comments and perform bulk actions.
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

export default SocialFeature;
