import Text from '@/components/ui/Typography/Text';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RiShareBoxFill } from 'react-icons/ri';

export default function ProfileStakeAddress() {
	const router = useRouter();

	return (
		<main className="grid grid-cols-1 xl:grid-cols-6 xl:gap-x-[1px] p-6">
			<section className="col-span-2 bg-white p-10">
				<Text size="3xl" weight="bold" className="mb-2">
					Account
				</Text>
				<Text weight="semibold" className="mb-1">
					{router.query.stakeAddress?.slice(0, 19)}...
					{router.query.stakeAddress?.slice(-19)}
				</Text>

				<Link
					href={`https://cardanoscan.io/address/${router.query.stakeAddress}`}
					target="_blank"
					className="inline-block hover:text-purple-800"
					rel="noopener noreferrer"
				>
					<RiShareBoxFill />
				</Link>

				<Text className="text-slate-500 mt-2 max-w-md">
					Your wallet is currently connected to this account address. You are viewing the whole
					balance belonging to the wallet.
				</Text>

				<Text size="2xl" weight="bold" className="mt-6 mb-2">
					Balance
				</Text>
				<Text size="xl" weight="semibold" className="text-purple-600">
					0 ₳
				</Text>

				<div className="space-y-2 mt-4">
					<button
						type="button"
						className={clsx(
							'bg-slate-100 text-slate-900',
							'text-start p-4 capitalize w-full border rounded-sm hover:bg-slate-100 transition-colors disabled:bg-slate-50 disabled:text-slate-300 text-slate-500 hover:text-slate-900',
						)}
					>
						<Text weight="bold" size="xl">
							Assets
						</Text>
						<Text>
							<Text as="span" weight="bold">
								0
							</Text>{' '}
							owned
						</Text>
					</button>
				</div>
			</section>

			<section className="col-span-4 bg-white p-10 h-full flex items-center justify-center text-slate-400">
				No assets found.
			</section>
		</main>
	);
}
