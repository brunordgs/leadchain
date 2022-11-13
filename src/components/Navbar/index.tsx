import { walletAtom } from '@/states/atoms/walletAtom';
import { getWalletAddress } from '@/utils/wallet';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
// import { AiOutlineAreaChart, AiOutlineSwap } from 'react-icons/ai';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { HiSquares2X2 } from 'react-icons/hi2';
// import { IoServer } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import ConnectWalletDialog from '../Dialogs/ConnectWalletDialog';
import ConnectedWalletDropdown from '../Dropdowns/ConnectedWalletDropdown';
import LinkButton from '../ui/Buttons/LinkButton';
import Text from '../ui/Typography/Text';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
	const router = useRouter();
	const [wallet, setWallet] = useRecoilState(walletAtom);

	const menuItems = [
		{
			text: 'Dashboard',
			link: '/',
			icon: HiSquares2X2,
			current: router.pathname === '/',
		},
		// {
		// 	text: 'Swap',
		// 	link: '/swap',
		// 	icon: AiOutlineSwap,
		// 	current: router.pathname === '/swap',
		// },
		// {
		// 	text: 'Indexes',
		// 	link: '/indexes',
		// 	icon: AiOutlineAreaChart,
		// 	current: router.pathname === '/indexes',
		// },
		// {
		// 	text: 'Bridge',
		// 	link: '/bridge',
		// 	icon: AiOutlineAreaChart,
		// 	current: router.pathname === '/bridge',
		// },
		// {
		// 	text: 'Stacking',
		// 	link: '/stacking',
		// 	icon: IoServer,
		// 	current: router.pathname === '/stacking',
		// },
	];

	useEffect(() => {
		async function setCurrenctConnectedWallet() {
			setWallet({
				...wallet,
				stakeAddress: await getWalletAddress(wallet),
			});
		}

		if (wallet?.isConnected) {
			setCurrenctConnectedWallet();
		}
	}, [wallet]);

	return (
		<>
			<header className="px-12 py-5 sticky top-0 border-b bg-white hidden xl:flex items-center z-10">
				<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
					<Text
						as="span"
						size="2xl"
						transform="uppercase"
						className="font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 pr-1 hover:brightness-110 transition-all"
					>
						Leadchain
					</Text>
				</LinkButton>

				<div className="flex-1 ml-12">
					<nav>
						<ul className="flex items-center gap-6">
							{menuItems.map(({ text, link, icon: Icon, current }) => (
								<li key={text} className="text-sm">
									<LinkButton
										href={link}
										color="unstyled"
										className={clsx(
											current ? 'text-purple-500' : 'text-slate-700',
											'hover:text-purple-500',
										)}
									>
										<Icon size={18} />
										{text}
									</LinkButton>
								</li>
							))}
						</ul>
					</nav>
				</div>

				<div className="flex items-center gap-4">
					<div className="border-r py-1 mr-2">
						<LinkButton
							href="/news"
							color="unstyled"
							className={clsx(
								router.pathname === '/news' ? 'text-purple-500' : 'text-slate-700',
								'hover:text-purple-500 pr-4',
							)}
						>
							<HiOutlineNewspaper size={18} />
							News
						</LinkButton>
					</div>

					<select className="px-4 py-2 transition-all ease-out border rounded-sm shadow-sm font-semibold text-slate-700">
						<option value="eth">Ethereum</option>
					</select>

					{wallet?.isConnected ? (
						<ConnectedWalletDropdown connectedWallet={wallet} onConnectedWallet={setWallet} />
					) : (
						<ConnectWalletDialog />
					)}
				</div>
			</header>

			<MobileNavbar />
		</>
	);
}
