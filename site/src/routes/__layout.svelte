<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Display from '$lib/components/Display.svelte';
	import List from '$lib/components/List.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<slot />
<Display />
<!-- <List /> -->
<Footer />
