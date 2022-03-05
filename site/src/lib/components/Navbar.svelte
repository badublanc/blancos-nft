<header class="max-w-5xl mx-auto">
	<div
		class="flex items-center justify-between sm:justify-center border-b-2 border-black mx-4 py-2 sm:py-4 lg:py-6"
	>
		<p class="font-display uppercase text-4xl sm:text-5xl">Blancos</p>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 sm:hidden"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	</div>

	<nav class="mx-4 flex items-center justify-between">
		<div class="hidden sm:flex">
			<a href="#" class="b-navText hoverToBlack">About</a>
			<a href="#" class="b-navText hoverToBlack">Archive</a>
			<a href="#" class="b-navText hoverToBlack">Latest</a>
			<a href="#" class="b-navText hoverToBlack">Random</a>
		</div>

		<div class="flex-grow sm:flex-grow-0 flex items-center justify-between">
			<a href="#" class="flex items-center space-x-1 hoverToBlack pl-1 sm:pl-2.5 py-1 sm:py-0">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="b-navText">Prev</p>
			</a>

			<a href="#" class="flex items-center space-x-1 hoverToBlack pr-1 sm:pr-2.5 py-1 sm:py-0">
				<p class="b-navText">Next</p>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-4 w-4"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
					<path
						fill-rule="evenodd"
						d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</nav>
</header>

<style>
	.b-navText {
		@apply uppercase text-xs px-2.5 pt-2 pb-2;
	}

	.hoverToBlack {
		@apply text-black  border-white bg-white hover:border-black hover:bg-black hover:text-white transition-all duration-200;
	}
</style>
