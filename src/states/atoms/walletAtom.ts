import { Wallet } from '@/shared/interfaces/Wallet';
import { atom } from 'recoil';

export const walletAtom = atom<Partial<Wallet> | null>({
	key: 'connectedWallet',
	default: null,
	effects_UNSTABLE: [
		({ setSelf, onSet }) => {
			if (typeof window === 'undefined') return;

			const savedValue =
				localStorage.getItem('wallet') && JSON.parse(localStorage.getItem('wallet') as string);

			if (savedValue) {
				setSelf(savedValue);
			}

			onSet((newValue) => {
				localStorage.setItem('wallet', JSON.stringify(newValue));
			});
		},
	],
});
