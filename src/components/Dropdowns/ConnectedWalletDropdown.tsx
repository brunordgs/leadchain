import { Wallet } from '@/shared/interfaces/Wallet';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import { Fragment } from 'react';
import {
	HiOutlineChevronDown,
	HiOutlineChevronUp,
	HiOutlineUser,
	HiStatusOffline,
} from 'react-icons/hi';

interface Props {
	connectedWallet: Partial<Wallet>;
	onConnectedWallet(connectedWallet: Partial<Wallet> | null): void;
}

export default function ConnectedWalletDropdown({ connectedWallet, onConnectedWallet }: Props) {
	return (
		<Menu as="div" className="relative flex text-left">
			<Menu.Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-slate-100 hover:text-white border border-indigo-500 rounded-sm shadow-md flex items-center justify-center transition-all ease-out leading-5 font-semibold focus:outline-none text-sm w-[155px] h-[38px] px-2 gap-2">
				{({ open }) =>
					open ? (
						<>
							{connectedWallet.stakeAddress?.slice(0, 11)}...
							{connectedWallet.stakeAddress?.slice(-2)}
							<HiOutlineChevronUp />
						</>
					) : (
						<>
							{connectedWallet.stakeAddress?.slice(0, 11)}...
							{connectedWallet.stakeAddress?.slice(-2)}
							<HiOutlineChevronDown />
						</>
					)
				}
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 top-10 mt-2 w-56 origin-top-right divide-y divide-zinc-100 px-1 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<Link
									href={`/profile/${connectedWallet.stakeAddress}`}
									className={clsx(
										{
											'bg-slate-100': active,
										},
										'group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-700 gap-2',
									)}
								>
									<HiOutlineUser />
									Profile
								</Link>
							)}
						</Menu.Item>
					</div>

					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<button
									type="button"
									onClick={() => onConnectedWallet(null)}
									className={clsx(
										{
											'bg-slate-100': active,
										},
										'group flex w-full items-center rounded-md px-2 py-2 text-sm text-slate-700 gap-2',
									)}
								>
									<HiStatusOffline />
									Disconnect wallet
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
