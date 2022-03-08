import { writable } from 'svelte/store';
import { ethers } from 'ethers';

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
