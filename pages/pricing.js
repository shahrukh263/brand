import Head from 'next/head';
import PricingHero from '../components/PricingHero';
import FeaturePlan from '../components/FeaturePlan';
import TestimonialComp from '../components/TestimonialComp';
import BrandComp from '../components/BrandComp';
import FaqComp from '../components/FaqComp';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import TrialComp from '../components/TrialComp';
import Footer from '../components/footer';
const Pricing = () => {
	useEffect(() => {
        AOS.init();
      }, [])
	return (
		<>
			<Head>
				<title>Pricing</title>
			</Head>
            <PricingHero/>
            <FeaturePlan/>
            <TestimonialComp/>
			<BrandComp/>
			<FaqComp/>
			<TrialComp/>
			<Footer/>
		</>
	);
};

export default Pricing;
