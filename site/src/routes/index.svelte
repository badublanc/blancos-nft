<script>
	import TopBar from '$lib/components/TopBar.svelte';
	import Header from '$lib/components/Header.svelte';
	import ArticleList from '$lib/components/ArticleList.svelte';
	import CollectionGrid from '$lib/components/CollectionGrid.svelte';
</script>

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
			<CollectionGrid />
			<!-- <ArticleList /> -->
		</main>

		<!-- <footer></footer> -->
	</div>
</div>
