import BoundlessABI from './contracts/BlancosNFT.json';

export const variables = {
	network: import.meta.env.VITE_ETH_NETWORK,
	boundless: {
		address: import.meta.env.VITE_BOUNDLESS_CONTRACT,
		abi: BoundlessABI
	}
};
