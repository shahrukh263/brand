import type { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";
import analyticsImg from "../images/analytics-img.png";
import DmMentionsImg from "../images/DM-mentions-img.png";
import postViewerImg from "../images/post-viewer-img.png";
import TranslationImg from "../images/translation-img.png";
import BlackListImg from "../images/blacklist-img.png";
import bulkImg from "../images/bulk-actions-img.png";
const SocialFeature: NextComponentType = () => {
  return (
    <>
      <section className="lg:pb-24 md:pb-20 sm:pb-16 pb-12">
        <div className="innerDiv">
          <h4
            data-aos="fade-up"
            className="text-[#2B2866] md:text-[40px] md:leading-10 text-[32px] leading-[38px] font-[600] inter-display tracking-[-0.005em] text-center md:mb-12 mb-8"
          >
            Some text goes here
          </h4>
          <div className="flex flex-wrap sm:-mx-4 gap-y-6">
            <div className="sm:px-4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full">
              <div
                data-aos="fade-up"
                className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]"
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
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em]">
                    In-depth analytics across all social pages and individual
                    team members.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="sm:px-4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <Image
                  src={DmMentionsImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    DMs & Mentions
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em]">
                    Monitor comments, mentions, and DMs across every platform in
                    one place.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="sm:px-4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <Image
                  src={postViewerImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    Post Viewer
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em]">
                    View the full post and comment threads without switching
                    apps.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="sm:px-4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <Image
                  src={TranslationImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    2-way Translation
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em]">
                    Automatically translate incoming comments and replies to any
                    language.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="sm:px-4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <Image
                  src={BlackListImg}
                  alt=""
                  className="rounded-t-3xl !block"
                />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em] inter-display">
                    Blacklist
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em] inter-display">
                    Automatically hide comments containing certain words or
                    phrases.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="sm:px-4 lg:w-1/3 md:w-1/3 sm:w-1/2 w-full"
            >
              <div className="bg-white rounded-3xl border border-[#E4E7EC] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)]">
                <Image src={bulkImg} alt="" className="rounded-t-3xl !block" />
                <div className=" p-6">
                  <h4 className="inter-display text-[#0C111D] font-semibold text-xl tracking-[-0.01em]">
                    Bulk Actions
                  </h4>
                  <p className="mt-3 text-[#475467] text-base tracking-[-0.011em]">
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
