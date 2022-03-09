import { readable, writable } from 'svelte/store';
import { ethers } from 'ethers';
import ABI from './contracts/BlancosNFT.json';

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

export const readOnlyContract = readable(
	new ethers.Contract(
		contractAddress,
		ABI,
		ethers.providers.getDefaultProvider('http://localhost:8545')
	)
);
export const Contract = writable(null);
export const initContract = async (_signer) => {
	Contract.set(new ethers.Contract(contractAddress, ABI, _signer));
	return;
};

export const providers = writable({
	browser: null,
	walletconnect: null,
	cloudflare: null,
	hosted: null,
	default: ethers.providers.getDefaultProvider()
});
export const signer = writable(null);
export const user = writable({
	address: null,
	ens: null
});
