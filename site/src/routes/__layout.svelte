<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';
	import { providers } from '$lib/stores.js';

	onMount(async () => {
		if (window.ethereum) {
			$providers.browser = new ethers.providers.Web3Provider(window.ethereum);
			// console.log($providers);
		}
	});
</script>

<slot />
