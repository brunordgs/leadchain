import { walletAtom } from '@/states/atoms/walletAtom';
import { checkAvailableWallets, enableWallet } from '@/utils/wallet';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import { HiOutlineChevronRight, HiX } from 'react-icons/hi';
import { useRecoilState } from 'recoil';
import Alert from '../ui/Alert';
import Button from '../ui/Buttons/Button';
import IconButton from '../ui/Buttons/IconButton';
import LinkButton from '../ui/Buttons/LinkButton';
import Text from '../ui/Typography/Text';

export default function ConnectWalletDialog() {
	const [isOpen, setIsOpen] = useState(false);
	const [wallet, setWallet] = useRecoilState(walletAtom);

	const availableWallets = [
		{
			value: 'nami',
			name: 'Nami',
			disabled: false,
		},
		{
			value: 'flint',
			name: 'Flint',
			disabled: false,
		},
		{
			value: 'ccvault',
			name: 'Eternl',
			disabled: false,
		},
	];

	return (
		<div>
			<Button onClick={() => setIsOpen(true)}>Connect to Wallet</Button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog
					as="div"
					className="relative z-50"
					onClose={() => {
						setIsOpen(false);
						setWallet(null);
					}}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-zinc-400/40" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-md transition-all">
									<div className="flex items-center justify-between">
										<Dialog.Title as="h3" className="text-lg md:text-xl font-bold leading-6">
											Connect your wallet
										</Dialog.Title>

										<IconButton
											icon={HiX}
											className="text-xl"
											onClick={() => {
												setIsOpen(false);
												setWallet(null);
											}}
											title="Close"
										/>
									</div>

									<div className="mt-8 space-y-2">
										{availableWallets.map(({ name, value, disabled }) => (
											<button
												key={name}
												type="button"
												value={value}
												disabled={disabled || !checkAvailableWallets().includes(value)}
												onMouseEnter={() => {
													if (checkAvailableWallets().includes(value)) {
														setWallet({ selectedWallet: value });
													}
												}}
												onClick={async () => {
													if (wallet?.selectedWallet) {
														try {
															const connectedWallet = await enableWallet(wallet.selectedWallet);

															if (connectedWallet) {
																setWallet({
																	...wallet,
																	...connectedWallet,
																	...window.cardano[wallet.selectedWallet],
																	isConnected: true,
																});
																setIsOpen(false);
															}
														} catch (e) {
															console.log(e);
														}
													}
												}}
												className={clsx(
													'flex items-center p-2 capitalize w-full border rounded-sm hover:bg-slate-100 transition-colors disabled:bg-slate-50 disabled:text-slate-300',
												)}
											>
												<div className="flex items-center gap-2 flex-1">
													<div className="relative w-10 h-10">
														<Image
															src={`/assets/icons/${value === 'ccvault' ? 'eternl' : value}.png`}
															fill
															className={clsx(
																{
																	'opacity-20':
																		disabled || !checkAvailableWallets().includes(value),
																},
																'aspect-square object-cover object-left rounded-sm',
															)}
															alt={name}
														/>
													</div>

													<div className="text-left">
														<Text size="sm">{name}</Text>
														<Text
															size="xs"
															className={clsx(
																{
																	'text-slate-300':
																		disabled || !checkAvailableWallets().includes(value),
																},
																'text-slate-400',
															)}
														>
															Connect using {name} wallet
														</Text>
													</div>
												</div>

												<HiOutlineChevronRight size={18} />
											</button>
										))}
									</div>

									<Alert color="info" className="px-3 py-2 mt-4">
										<Text size="xs" className="max-w-xs">
											By connecting a wallet, you agree to LeadChain's{' '}
											<Text as="span" size="xs" className="text-purple-600">
												Terms of Service
											</Text>{' '}
											and acknowledge that you have read and understand the LeadChain{' '}
											<Text as="span" size="xs" className="text-purple-600">
												Disclaimer.
											</Text>
										</Text>
									</Alert>

									<div className="border-b border-slate-100 pt-4 mb-2" />

									<Text size="xs" className="text-slate-400 flex">
										Don't have a wallet?&nbsp;
										<LinkButton
											href="https://chrome.google.com/webstore/category/extensions"
											color="unstyled"
											fontSize="xs"
											className="text-purple-600 font-semibold hover:text-purple-800 underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											Download here
										</LinkButton>
									</Text>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	);
}
