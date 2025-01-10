import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HelpDeskHero from "../components/HelpDeskHero";
import BrandComp from "../components/BrandComp";
import Footer from "../components/footer";
import TestimonialComp from "../components/TestimonialComp";
import FaqComp from "../components/FaqComp";
import TrialCompHome from "../components/TrialCompHome";
import HelpPlatformComp from "../components/HelpPlatformComp";
import HelpSocialFeature from "../components/HelpSocialFeature";
const SocialInbox = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Helpdesk</title>
      </Head>
      <HelpDeskHero/>
      <BrandComp />
      <HelpPlatformComp/>
      <HelpSocialFeature/>
      <TestimonialComp />
      <FaqComp />
      <TrialCompHome/>
    </div>
  );
};

export default SocialInbox;
