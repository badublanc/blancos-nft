<script>
	import TopBar from '$lib/components/TopBar.svelte';
	import Header from '$lib/components/Header.svelte';
	import Banner from '$lib/components/Banner.svelte';
	import ArticleList from '$lib/components/ArticleList.svelte';
	import CollectionGrid from '$lib/components/CollectionGrid.svelte';
</script>

<svelte:head>
	<title>Blancos. For the builders.</title>
</svelte:head>

<div class="min-h-screen">
	<div class="flex flex-col">
		<header>
			<TopBar />
			<Header>
				<p class="text-xl leading-tight md:text-2xl max-w-2xl">
					In obcaecati nesciunt qui libero veniam et mollitia cupiditate est amet commodi in galisum
					ipsa. Accusamus repudiandae qui maiores quia non deleniti accusantium ea veritatis.
				</p>
			</Header>
		</header>

		<main>
			<Banner>
				<p class="text-center text-sm md:text-lg">Mint date coming soon...</p>
			</Banner>
			<!-- <ArticleList />
			<CollectionGrid /> -->
		</main>

		<!-- <footer></footer> -->
	</div>
</div>
