import BoundlessABI from './contracts/BlancosNFT.json';

export const variables = {
	network: {
		name: import.meta.env.VITE_NETWORK_NAME,
		chainId: import.meta.env.VITE_NETWORK_CHAINID
	},
	boundless: {
		address: import.meta.env.VITE_BOUNDLESS_CONTRACT,
		abi: BoundlessABI
	}
};
