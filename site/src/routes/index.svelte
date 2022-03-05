<script>
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';

	let provider, signer, address, ensName;

	const connectWallet = async () => {
		await provider.send('eth_requestAccounts', []);
		signer = provider.getSigner();
		address = await signer.getAddress();
		ensName = await checkForENS(address);
	};

	const checkForENS = async (_address) => {
		if (!_address) return null;
		return (await provider.lookupAddress(_address)) || _address;
	};

	onMount(async () => {
		if (window.ethereum) {
			provider = new ethers.providers.Web3Provider(window.ethereum);
		}
	});
</script>

{#if provider}
	{#if signer}
		<p>Hi, {ensName || address}!</p>
	{:else}
		<button on:click={connectWallet}>Connect Wallet</button>
	{/if}
{:else}
	<p>install metamask ;)</p>
{/if}
