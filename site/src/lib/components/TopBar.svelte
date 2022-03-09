<script>
	import Noggles from '$lib/components/Noggles.svelte';
</script>

<div class="">
	<div
		class="container lg:max-w-7xl mx-auto flex items-center justify-between mt-4 lg:mt-10 mb-20 md:mb-24 px-4"
	>
		<a href="/" alt="">
			<Noggles height="h-8 md:h-10" />
		</a>

		<button class="scale-[-1]">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 w-7 hidden"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
			</svg>
		</button>
	</div>
</div>
