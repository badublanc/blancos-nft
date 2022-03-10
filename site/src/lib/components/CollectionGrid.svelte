<script>
	export let items = [
		{
			id: 6,
			image_url: 'https://i.imgur.com/YknzXNF.png'
		},
		// {
		// 	id: 7,
		// 	image_url: 'https://i.imgur.com/EiG1B1M.png'
		// },
		{
			id: 8,
			image_url: ''
		}
	];
</script>

<div class="mt-4 lg:mt-8">
	<div class="container lg:max-w-7xl mx-auto grid md:grid-cols-2 gap-4 lg:gap-8 px-4">
		{#each items as item}
			<div class="flex flex-col space-y-2">
				<a href={`/collection/${item.id}`} class="overflow-hidden flex">
					{#if item.image_url}
						<img
							src={item.image_url}
							alt=""
							class="aspect-video object-cover hover:scale-110 transition-all duration-300"
						/>
					{:else}
						<div
							class="aspect-video bg-gradient-to-br from-green-100 via-teal-50 to-yellow-100 w-full"
						/>
					{/if}
				</a>

				<div class="flex justify-between">
					<div class="">
						<p class="text-base">Blanco #{item.id}</p>
						<p class="text-xs pl-0.5">released 3 days ago</p>
					</div>
					<button class="bg-black text-white px-6 py-1">Mint</button>
				</div>
			</div>
		{/each}

		<!-- <p>and this is the explainer box</p> -->
	</div>
</div>
