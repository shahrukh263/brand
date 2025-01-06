import type {NextPage} from 'next';
import Head from 'next/head';
import HomeHero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<HomeHero/>
		</>
	);
};

export default Home;
