import CollectionTable from '@/components/CollectionTable';
import Button from '@/components/ui/Buttons/Button';
import LinkButton from '@/components/ui/Buttons/LinkButton';
import Container from '@/components/ui/Container';
import Text from '@/components/ui/Typography/Text';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineFilter } from 'react-icons/hi';

export default function Home() {
	return (
		<>
			<Head>
				<title>LeadChain</title>
			</Head>

			<Container className="grid grid-cols-1 xl:grid-cols-8 gap-y-[1px] xl:gap-x-[1px]">
				<section className="col-span-6 bg-white p-6 md:p-10 rounded-sm shadow-sm">
					<header className="flex flex-col md:flex-row gap-4 items-start justify-between">
						<div>
							<Text size="3xl" weight="bold">
								Staking
							</Text>
							<Text size="lg" className="text-slate-500 mt-2">
								Start earning rewards with Polygon Staking.
							</Text>
						</div>

						<Button variant="outlined">Become a delegator</Button>
					</header>

					<div className="border-b border-slate-100 my-6" />

					<div className="grid grid-cols-4">
						<div className="border border-r-0 last:border-r p-6 text-center space-y-2 rounded-sm">
							<Text size="xl">100</Text>
							<Text size="sm" className="text-slate-400">
								Total validators
							</Text>
						</div>
						<div className="border border-r-0 last:border-r p-6 text-center space-y-2 rounded-sm">
							<Text size="xl">2,692,786,505 RUNE</Text>
							<Text size="sm" className="text-slate-400">
								Total stake
							</Text>
						</div>
						<div className="border border-r-0 last:border-r p-6 text-center space-y-2 rounded-sm">
							<Text size="xl">536,870,251 RUNE</Text>
							<Text size="sm" className="text-slate-400">
								Total reward distribution
							</Text>
						</div>
						<div className="border border-r-0 last:border-r p-6 text-center space-y-2 rounded-sm">
							<Text size="xl">+42.4%</Text>
							<Text size="sm" className="text-slate-400">
								Checkpoint interval
							</Text>
						</div>
					</div>

					<div className="mt-24">
						<div className="flex flex-col sm:flex-row gap-4 lg:items-center justify-between">
							<Text size="xl" weight="bold">
								All Validators
							</Text>

							<div className="flex gap-4">
								<input
									type="text"
									className="bg-slate-50 border text-sm px-3 rounded-sm w-full sm:w-64 text-slate-600 placeholder:text-slate-300 transition-all outline-2 outline-slate-300"
									placeholder="Search for collection"
								/>
								<Button color="secondary" rightIcon={HiOutlineFilter}>
									Filter
								</Button>
							</div>
						</div>

						<div className="border-b border-slate-100 my-6" />

						<CollectionTable
							tableHeaders={['Assets', 'Stake', 'Checkpoint Signed', 'Commission', 'Action']}
							data={[
								{
									assets: {
										image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
										text: 'Mind Heart Soul',
									},
									stake: '123,180 RUNE',
									checkpointSigned: '26.55%',
									comission: '4%',
								},
								{
									assets: {
										image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
										text: 'Mind Heart Soul',
									},
									stake: '123,180 RUNE',
									checkpointSigned: '26.55%',
									comission: '4%',
								},
								{
									assets: {
										image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
										text: 'Mind Heart Soul',
									},
									stake: '123,180 RUNE',
									checkpointSigned: '26.55%',
									comission: '4%',
								},
								{
									assets: {
										image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
										text: 'Mind Heart Soul',
									},
									stake: '123,180 RUNE',
									checkpointSigned: '26.55%',
									comission: '4%',
								},
								{
									assets: {
										image: 'https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
										text: 'Mind Heart Soul',
									},
									stake: '123,180 RUNE',
									checkpointSigned: '26.55%',
									comission: '4%',
								},
							]}
							attributes={['assets', 'stake', 'checkpointSigned', 'comission', 'action']}
						/>
					</div>
				</section>

				<section className="row-start-1 xl:row-start-auto col-span-2 bg-white p-6 md:p-10 rounded-sm shadow-sm">
					<header className="flex items-center justify-between">
						<Text size="lg" weight="bold">
							Learn
						</Text>
						<LinkButton
							href="/news"
							color="unstyled"
							className="text-purple-600 font-semibold hover:text-purple-800"
						>
							More
						</LinkButton>
					</header>

					<div className="mt-8 xl:space-y-4 flex xl:flex-col xl:justify-evenly gap-4 xl:gap-0 overflow-x-auto">
						{Array.from({ length: 4 }, (_, index) => (
							<Link
								key={index}
								href="/"
								className="bg-slate-50 p-4 flex gap-4 max-w-sm text-slate-700"
							>
								<div className="relative h-24 w-44 min-w-[6rem]">
									<Image
										src="https://v2.cimg.co/news/92702/232012/responsive-images/adobestock-484838882-editorial-use-only___media_library_original_6240_4160.jpeg"
										fill
										className="aspect-square object-cover object-left rounded-sm"
										alt=""
									/>
								</div>

								<div className="flex flex-col">
									<Text size="sm" className="flex-1">
										Dogecoin Price Prediction as $2 Billion Trading Volume Comes In
									</Text>

									<div className="flex gap-x-4 text-slate-500">
										<Text size="xs">Lead blog</Text>
										<Text size="xs" className="text-slate-400">
											1h ago
										</Text>
									</div>
								</div>
							</Link>
						))}
					</div>
				</section>
			</Container>
		</>
	);
}
