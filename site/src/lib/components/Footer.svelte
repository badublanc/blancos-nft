<script>
	import { providers, signer, user, initContract, Contract } from '$lib/stores.js';
	import { shortenAddress } from '$lib/utils.js';

	$: provider = $providers.browser || $providers.default;
	$: displayName = $user.ens || shortenAddress($user.address);

	const connectWallet = async () => {
		await provider.send('eth_requestAccounts', []);
		$signer = provider.getSigner();
		await initContract($signer);

		$user.address = await $signer.getAddress();
		$user.ens = await checkForENS($user.address);
	};

	const disconnectWallet = () => {
		$signer = null;
		$user.address = null;
		$user.ens = null;
		$Contract = null;
	};

	const checkForENS = async (_address) => {
		if (!_address) return null;
		return await provider.lookupAddress(_address);
	};
</script>

<div class="border-t-2 border-black">
	<div class="max-w-5xl mx-auto flex justify-between">
		{#if $signer}
			<p class="footer-textSpacing">Hi, {displayName}!</p>
		{:else}
			<p class="footer-textSpacing">Bienvenue.</p>
		{/if}

		{#if $signer}
			<button on:click={disconnectWallet} class="footer-button footer-textSpacing"
				>Disconnect</button
			>
		{:else}
			<button on:click={connectWallet} class="footer-button footer-textSpacing"
				>Connect Wallet</button
			>
		{/if}
	</div>
</div>

<style>
	.footer-textSpacing {
		@apply px-2 sm:px-4 py-2;
	}
	.footer-button {
		@apply hover:bg-gray-800 hover:text-white transition-all duration-300;
	}
</style>
