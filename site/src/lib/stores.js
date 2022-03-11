import { readable, writable } from 'svelte/store';
import { ethers } from 'ethers';
import { variables } from '$lib/variables.js';

export const readOnlyContract = readable(
	new ethers.Contract(
		variables.boundless.address,
		variables.boundless.abi,
		ethers.providers.getDefaultProvider(variables.network)
	)
);
export const Contract = writable(null);
export const initContract = async (_signer) => {
	Contract.set(new ethers.Contract(variables.boundless.address, variables.boundless.abi, _signer));
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
