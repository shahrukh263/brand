import '../styles/index.scss';
import type {AppProps} from 'next/app';
import Navbar from '../components/Navbar';
import Footer from './../components/footer';
function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Navbar />
			<main className='overflow-x-hidden'>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}

export default MyApp;
