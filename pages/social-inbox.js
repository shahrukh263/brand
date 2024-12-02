import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SocialHero from "../components/SocialHero";
import BrandComp from "../components/BrandComp";
import Footer from "../components/footer";
import PlatformComt from "../components/PlatformComp";
import SocialFeature from "../components/SocialFeature";
import TestimonialComp from "../components/TestimonialComp";
import FaqComp from "../components/FaqComp";
import TrialComp from "../components/TrialComp";
const SocialInbox = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Social Inbox</title>
      </Head>
      <SocialHero />
      <BrandComp />
      <PlatformComt />
      <SocialFeature />
      <TestimonialComp />
      <FaqComp />
      <TrialComp/>
      <Footer />
    </div>
  );
};

export default SocialInbox;
