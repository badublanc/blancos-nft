<script>
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';

	onMount(async () => {});
</script>

<div class="flex-grow">
	<div class="grid sm:grid-cols-10 max-w-5xl mx-auto">
		<div class="sm:col-span-8 sm:col-start-2 flex flex-col items-center">
			<p class="font-light text-lg sm:text-2xl mb-1">&#8470; 4</p>
			<img src="https://i.imgur.com/YknzXNF.png" alt="" class="px-2 sm:px-4" />

			<div class="my-5 sm:my-8 text-center">
				<div class="flex items-stretch space-x-2">
					<a
						href="#"
						class="flex items-center px-2 hover:bg-gray-800 hover:text-white transition-all duration-300"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
							/>
						</svg>
						<p class="">Prev</p>
					</a>

					<button
						class="sm:text-lg uppercase border border-gray-800 px-4 py-1 bg-gray-800 text-white hover:bg-purple-200 hover:text-black hover:animate-spin transition-all duration-300"
						>Mint</button
					>

					<a
						href="#"
						class="flex items-center px-2 hover:bg-gray-800 hover:text-white transition-all duration-300"
					>
						<p class="">Next</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
						</svg>
					</a>
				</div>

				<p class="mt-3 sm:mt-4 text-sm">0.06 &Xi; per mint</p>
			</div>
		</div>
	</div>
</div>
