<script>
	import { providers, signer, user, initContract, Contract } from '$lib/stores.js';
	import { shortenAddress } from '$lib/utils.js';

	export let title = 'Blancos';
	let navItems = [
		{
			name: 'Periodicals',
			slug: 'periodicals'
		},
		{
			name: 'Collection',
			slug: 'collection'
		},
		{
			name: 'Blog',
			slug: 'blog'
		}
	];

	$: titleStyle = title == 'Blancos' ? 'homeTitleStyle' : 'pageTitleStyle';
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

<div class="border-b border-black">
	<div
		class="container lg:max-w-7xl mx-auto grid lg:grid-cols-2 px-4 gap-5 md:gap-3 lg:gap-0 mb-20 md:mb-0"
	>
		<p class={`font-display uppercase -ml-1 ${titleStyle}`}>{title}</p>

		<slot />

		<div class="lg:col-span-2 hidden md:flex items-center justify-between mt-20 lg:mt-24 mb-5">
			<div class="hidden md:flex items-center space-x-10">
				<!-- {#each navItems as item}
					<a
						href={`/${item.slug}`}
						class="leadItem border-b border-violet-50 hover:border-black transition-all duration-300"
						>{item.name}</a
					>
				{/each} -->
			</div>

			{#if $signer}
				<button on:click={disconnectWallet} class="group walletButton disconnectHover px-3">
					<p class="truncate">Hi, {displayName}</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 text-stone-400 pt-0.5 group-hover:text-black transition-all duration-300 flex-shrink-0"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</button>
			{:else}
				<button on:click={connectWallet} class="walletButton connectHover">
					<p class="truncate">Connect Wallet</p>
				</button>
			{/if}
		</div>
	</div>
</div>

<style>
	.homeTitleStyle {
		@apply text-5xl md:text-7xl lg:text-8xl;
	}

	.pageTitleStyle {
		@apply text-3xl md:text-4xl lg:text-5xl;
	}

	.walletButton {
		@apply flex items-center space-x-1.5 -mb-0.5 py-1 max-w-sm border-b border-violet-50 transition-all duration-300;
	}

	.connectHover {
		@apply hover:border-black;
	}

	.disconnectHover {
		@apply hover:bg-rose-200;
	}
</style>
