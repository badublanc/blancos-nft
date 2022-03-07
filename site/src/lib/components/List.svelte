<script>
	let items = [
		{
			date: '2022-03-06',
			number: 5,
			title: 'The Land Down Under',
			available: true
		},
		{
			date: '2022-03-05',
			number: 4,
			title: "We Don't Talk About Bruno",
			available: false
		},
		{
			date: '2022-03-04',
			number: 3,
			title: 'Maria is Wild, I Cannot Believe Her',
			available: true
		},
		{
			date: '2022-03-03',
			number: 2,
			title: 'I Need My Beauty Rest',
			available: true
		},
		{
			date: '2022-03-03',
			number: 1,
			title: "God's Fluffy Cotton Candy In The Sky",
			available: false
		}
	];
</script>

<div class="max-w-5xl mx-auto">
	<div class="mx-4 border-t-2 border-black">
		<div class="">
			<p class="pt-2 pb-3 px-0.5 font-display text-xl text-gray-800">Latest</p>

			<table class="table-auto w-full">
				<thead>
					<tr>
						<th class="list-tableHeaderText">
							<p class="pl-1">&#8470;</p>
						</th>
						<th class="list-tableHeaderText">Title</th>
						<th />
					</tr>
				</thead>

				<tbody>
					{#each items as i}
						<tr
							class="group hover:bg-purple-100 transition-all duration-300 border-b cursor-pointer"
						>
							<td>
								<p class="list-tableRowText pl-1 pr-2 text-sm">{i.number}</p>
							</td>
							<td>
								<p class="list-tableRowText">{i.title}</p>
							</td>
							<td class="text-right">
								<div class="pr-1 py-3">
									<button
										class="py-1 px-3 text-sm border border-gray-300 text-gray-600 group-hover:bg-black group-hover:text-white group-hover:border-black group-hover:animate-pulse transition-all duration-300"
										>Mint</button
									>
								</div>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.list-tableHeaderText {
		@apply text-xs uppercase font-semibold text-gray-700 text-left;
	}

	.list-tableRowText {
		@apply pt-1 pb-0 text-gray-600 group-hover:text-black truncate;
	}
</style>
