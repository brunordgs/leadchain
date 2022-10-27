import Button from '@/components/ui/Buttons/Button';
import LinkButton from '@/components/ui/Buttons/LinkButton';
import Text from '@/components/ui/Typography/Text';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>RuneChain</title>
			</Head>
			<main className="grid grid-cols-8 p-4 gap-[1px]">
				<section className="col-span-6 bg-white p-10 rounded-sm shadow-sm">
					<header className="flex items-start justify-between">
					<div>
						<Text size="3xl" weight="bold">
							Staking
						</Text>
						<Text size="md" className="text-slate-500 mt-2">
							Start earning rewards with Polygon Staking.
						</Text>
					</div>

					<Button variant="outlined">Become a delegator</Button>
					</header>
				</section>
				<section className="col-span-2 bg-white p-10 rounded-sm shadow-sm">
					<header className="flex items-center justify-between">
						<Text size="lg" weight="bold">
							Learn
						</Text>
						<LinkButton href="/news" color="unstyled" className="text-purple-600 font-semibold">
							More
						</LinkButton>
					</header>
				</section>
			</main>
		</>
	);
}
