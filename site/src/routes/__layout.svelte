<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col justify-between min-h-screen">
	<Navbar />

	<slot />

	<Footer />
</div>
