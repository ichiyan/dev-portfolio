<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import { getAssetURL } from '$lib/data/assets';

	import { title, items } from '@data/awards';
	import type { Award } from '$lib/types';
	import { getMonthName} from '$lib/utils';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	let search = '';

	let result: Array<Award> = items;

	let award: Award

	const onSearch = (ev: CustomEvent<{ search: string }>) => {
		const s = ev.detail.search;

		result = items.filter((it) => {
			return (
				it.name.toLowerCase().includes(s) ||
				it.award.toLowerCase().includes(s) ||
				it.description.toLowerCase().includes(s) ||
				it.location.toLowerCase().includes(s) 
			);
		});
	};

</script>

<SearchPage {title} {search} on:search={onSearch}>
		{#if result.length === 0}
			<div class="col items-center relative mt-10 flex-1">
				<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
					<UIcon icon="i-carbon-development" classes="text-3.5em" />
					<p class="font-300">Could not find anything...</p>
				</div>
			</div>
		{:else}
			<div class="col items-start relative mt-10 flex-1">
				<div
					class="w-[0.5px] hidden lg:flex top-0 bottom-0 py-50px ms-7px bg-[var(--border)] absolute rounded"
				/>
				{#each result as award, index (award.slug)}
					<div
						class={`flex flex-row relative items-center w-full my-[20px]`}
					>
						<!-- <div class="flex-1 hidden" /> -->
						<div class="hidden lg:inline py-15px pe-20px bg-[var(--main)] rounded">
							<UIcon icon="i-carbon-condition-point" />
						</div>
						<div class="col flex-1 items-stretch">
							<Card color={award.color}>
								<div class="flex-1 col gap-2 items-stretch">
									<div class="text-[1.3em] font-light">{award.name}</div>
									<div  class="text-[1.3em] font-medium mb-5px">{award.award}</div>
									{#if award.links}
										<div class="row flex-wrap gap-1 mt-15px">
											{#each award.links as link}
												<Chip href={link.to}>
													<div class="row-center gap-2">
														<UIcon icon="i-carbon-link" />
														<span>{link.label}</span>
													</div>
												</Chip>
											{/each}
										</div>
									{/if}
									<div class="col text-[0.9em]">
										<CardDivider/>
										<div class="row items-center gap-2">
											<UIcon icon="i-carbon-location" />
											{award.location}
										</div>
										<CardDivider />
										<div class="row items-center gap-2">
											<UIcon icon="i-carbon-calendar" classes="text-1.25em" />
											<!-- {getDatePeriod(award.period.from, award.period.to)} -->
											{`${getMonthName(award.period.from.getMonth())} ${award.period.from.getFullYear()}`}
										</div>
										<CardDivider />
										<div class="py-5 leading-relaxed">
											{award.description}
										</div>
									</div>
								</div>
							</Card>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	<!-- </div> -->
</SearchPage>
