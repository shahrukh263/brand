import type { NextPage } from "next";
import Head from "next/head";
import HomeHero from "../components/Hero";
import BrandComp from "../components/BrandComp";
import HomePlatformComp from "../components/HomePlatformComp";
import FaqComp from "../components/FaqComp";
import TestimonialComp from "../components/TestimonialComp";
import TrialCompHome from "../components/TrialCompHome";
import SocialAccounts from "../components/SocialAccounts";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeHero />
      <BrandComp />
      <div className="md:hidden block">
        <SocialAccounts />
      </div>
      <HomePlatformComp />
      <div className="md:block hidden">
        <FaqComp />
      </div>
      <TestimonialComp />
	  <div className="md:hidden block">
        <FaqComp />
      </div>
      <div className="md:block hidden">
        <SocialAccounts />
      </div>
      <TrialCompHome />
    </>
  );
};

export default Home;
