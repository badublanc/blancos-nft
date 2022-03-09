import { get as retrieve } from 'svelte/store';
import { ethers } from 'ethers';
import { readOnlyContract } from '../../lib/stores.js';

export const get = async () => {
	const totalBN = await retrieve(readOnlyContract).totalSupply();
	const total = ethers.BigNumber.from(totalBN).toNumber();

	return {
		status: 200,
		body: { total }
	};
};
