import CollectionTable from '@/components/CollectionTable';
import Button from '@/components/ui/Buttons/Button';
import LinkButton from '@/components/ui/Buttons/LinkButton';
import Text from '@/components/ui/Typography/Text';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>LeadChain</title>
			</Head>

			<main className="grid grid-cols-8 p-6 gap-[1px]">
				<section className="col-span-6 bg-white p-10 rounded-sm shadow-sm">
					<header className="flex items-start justify-between">
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
						<div className="flex items-center justify-between">
							<Text size="xl" weight="bold">
								All Validators
							</Text>

							<div className="flex gap-4">
								<input
									type="text"
									className="bg-slate-50 border text-sm px-3 rounded-sm w-64"
									placeholder="Search for collection"
								/>
								<Button size="small">Filter</Button>
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
