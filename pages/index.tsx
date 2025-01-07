import type {NextPage} from 'next';
import Head from 'next/head';
import HomeHero from '../components/Hero';
import BrandComp from '../components/BrandComp';
import HomePlatformComp from '../components/HomePlatformComp';
import FaqComp from '../components/FaqComp';
import TestimonialComp from '../components/TestimonialComp';
import TrialComp from '../components/TrialComp';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<HomeHero/>
			<BrandComp/>
			<HomePlatformComp/>
			<FaqComp/>
			<TestimonialComp/>
			<TrialComp/>
		</>
	);
};

export default Home;
