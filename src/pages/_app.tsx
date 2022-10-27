import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</RecoilRoot>
	);
}
