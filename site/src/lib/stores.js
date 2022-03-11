import { readable, writable } from 'svelte/store';
import { ethers } from 'ethers';
import ABI from './contracts/BlancosNFT.json';

const contractAddress = '0x2B211F3ba5Ec656f923D86988bB8aeC0C5E0cf6a';

export const readOnlyContract = readable(
	new ethers.Contract(contractAddress, ABI, ethers.providers.getDefaultProvider('rinkeby'))
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
