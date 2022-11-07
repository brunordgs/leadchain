export interface Wallet {
	name: string;
	icon: string;
	walletContractAddress: string;
	isConnected: boolean;
	selectedWallet: string;
	// walletFound: boolean;
	// walletIsEnabled: boolean;
}
