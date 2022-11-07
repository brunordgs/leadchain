import { walletAtom } from '@/states/atoms/walletAtom';
import { getWalletAddress } from '@/utils/wallet';
import { useEffect } from 'react';
import { AiOutlineAreaChart, AiOutlineSwap } from 'react-icons/ai';
import { HiSquares2X2 } from 'react-icons/hi2';
import { IoServer } from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import ConnectWalletDialog from '../Dialogs/ConnectWalletDialog';
import ConnectedWalletDropdown from '../Dropdowns/ConnectedWalletDropdown';
import LinkButton from '../ui/Buttons/LinkButton';
import Text from '../ui/Typography/Text';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
	const [wallet, setWallet] = useRecoilState(walletAtom);

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
						className="font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 pr-1"
					>
						Leadchain
					</Text>
				</LinkButton>

				<div className="flex-1 ml-12">
					<nav>
						<ul className="flex items-center gap-6">
							<li className="text-sm">
								<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
									<HiSquares2X2 size={18} />
									Dashboard
								</LinkButton>
							</li>
							<li className="text-sm">
								<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
									<AiOutlineSwap size={18} />
									Swap
								</LinkButton>
							</li>
							<li className="text-sm">
								<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
									<AiOutlineAreaChart size={18} />
									Indexes
								</LinkButton>
							</li>
							<li className="text-sm">
								<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
									<AiOutlineAreaChart size={18} />
									Bridge
								</LinkButton>
							</li>
							<li className="text-sm">
								<LinkButton href="/" color="unstyled" className="text-slate-700 hover:text-black">
									<IoServer size={18} />
									Staking
								</LinkButton>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex items-center gap-4">
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
