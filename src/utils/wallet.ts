import * as wasm from '@emurgo/cardano-serialization-lib-asmjs';
import { AVAILABLE_WALLETS, isBrowser } from '../shared/constants';

/**
 * @description
 * This function checks if the wallet is available in the browser.
 * @returns {string[]} A list of available wallets.
 */
export function checkAvailableWallets(): string[] {
	const cardanoConnection = isBrowser && window?.cardano;

	return Object.keys(cardanoConnection).filter((wallet) => AVAILABLE_WALLETS.includes(wallet));
}

/**
 * @description
 * Enables the wallet that was chosen by the user
 * When this executes the user should get a window pop-up
 * from the wallet asking to approve the connection
 * of this app to the wallet.
 * @param selectedWallet Available Wallet selected by the user.
 * @returns The wallet object.
 */
export async function enableWallet(selectedWallet: string) {
	try {
		return await window.cardano[selectedWallet].enable();
	} catch (err) {
		console.log(err);
	}
}

export async function getWalletAddress(connectedWallet: any) {
	let walletContractAddress = connectedWallet.walletContractAddress;

	// Typhon wallet is quite different from other wallets, it already has correct address by default
	if (connectedWallet.selectedWallet === 'typhon') {
		const walletAddress = walletContractAddress ?? (await connectedWallet.getAddress());
		return walletAddress.data;
	}

	const walletAddress = walletContractAddress ?? (await connectedWallet.getChangeAddress());
	walletContractAddress = wasm.Address.from_bytes(hexToBytes(walletAddress) as any).to_bech32();

	return walletContractAddress;
}

export async function getNetworkId(selectedWallet: string) {
	const wallet = await enableWallet(selectedWallet);

	try {
		return await wallet.getNetworkId();
	} catch (err) {
		console.log(err);
	}
}

export async function getUtxos(selectedWallet: string) {
	const wallet = await enableWallet(selectedWallet);

	try {
		return await wallet.getUtxos();
	} catch (err) {
		console.log(err);
	}
}

/**
 * @description
 * This function converts a hex string to a byte array.
 * @param {string | number | number[]} hex Hex string.
 * @returns
 */
export function hexToBytes(hex: any) {
	for (var bytes = [], c = 0; c < hex.length; c += 2) {
		bytes.push(parseInt(hex.substr(c, 2), 16));
	}

	return bytes;
}
