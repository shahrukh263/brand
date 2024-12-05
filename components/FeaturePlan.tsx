import type { NextComponentType } from "next";
import Image from "next/image";
import HelpDeskIcon from "../images/icons/help-desk-icon.svg";
import SocialInboxIcon from "../images/icons/social-inbox.svg";
import CommentIcon from "../images/icons/comment-icon.svg";
import AiReplyIcon from "../images/icons/ai-reply-icon.svg";
import ObiIcon from "../images/icons/obie-insights-icon.svg";
import LiveChatIcon from "../images/icons/live-chat-icon.svg";
import SmartLabelsIcon from "../images/icons/smart-labels-icon.svg";
import AiSummaryIcon from "../images/icons/ai-summary-icon.svg";
import AutomationsIcon from "../images/icons/automations-icon.svg";
import KeywordBlacklistIcon from "../images/icons/keyword-blacklist-icon.svg";
import OrganizationIcon from "../images/icons/organization-icon.svg";
import TeamAnalyticsIcon from "../images/icons/team-analytics-icon.svg";
import MultilingualIcon from "../images/icons/multilingual-icon.svg";
import TeamMemberIcon from "../images/icons/team-members-icon.svg";
import TeamCollaborationIcon from "../images/icons/team-collaboration-icon.svg";
import ShopifyIcon from "../images/icons/shopify-icon.svg";
const FeaturePlan: NextComponentType = () => {
  return (
    <>
      <section className="lg:py-24 md:py-20 sm:py-16 py-12 bg-[url('../images/feature-bg.png')] md:bg-cover bg-contain">
        <div className="innerDiv">
          <h3 data-aos="fade-up" className="md:text-[40px] md:leading-[1] text-[32px] leading-[38px] font-[600] tracking-[-0.02em] text-[#2B2866] text-center md:mb-12 mb-8 inter-display">
            Every feature on every plan
          </h3>
          <div className="flex flex-wrap lg:gap-6 gap-4 justify-center">
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={HelpDeskIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Help desk inbox (email + livechat)
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={SocialInboxIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Social inbox (FB, IG, TikTok)
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={CommentIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                AI Comment Moderation
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={AiReplyIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                AI Replies
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={ObiIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Obie Insights + Chat
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={LiveChatIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Live chat widget customization
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={SmartLabelsIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Smart Labels
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={AiSummaryIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                AI Summaries
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={AutomationsIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Automations
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={KeywordBlacklistIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Keyword blacklist
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={OrganizationIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Organization Analytics
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={TeamAnalyticsIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Team Analytics
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={MultilingualIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Multilingual Support
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={TeamMemberIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Unlimited team members
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={TeamCollaborationIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Team collaboration
              </span>
            </div>
            <div data-aos="fade-up" className="py-2 px-[10px] rounded-xl bg-white border border-[#D0D5DD] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center gap-x-1">
              <Image src={ShopifyIcon} alt="" />
              <span className="md:text-base font-medium text-sm tracking-[-0.011em] text-center text-[#0C111D]">
                Shopify integration
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePlan;
