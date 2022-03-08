<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';
	import { providers } from '$lib/stores.js';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(async () => {
		if (window.ethereum) {
			$providers.browser = new ethers.providers.Web3Provider(window.ethereum);
			// console.log($providers);
		}
	});
</script>

<div class="flex flex-col justify-between min-h-screen">
	<Navbar />

	<slot />

	<Footer />
</div>
