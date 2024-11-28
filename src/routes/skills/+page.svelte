<script lang="ts">
	import { base } from '$app/paths';
	import { title, groupByCategory } from '@data/skills';
	import { theme } from '$lib/stores/theme';
	import Assets, { getAssetURL } from '$lib/data/assets';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	let result = groupByCategory('');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		result = groupByCategory(query.trim().toLowerCase());
	};

	let currentTheme: boolean;

	theme.subscribe((v) => (currentTheme = v));

</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else}
		<div class="pt-5 pb-15 gap-3 m-y-auto flex-1">
			<!-- <h3 class="font-500">Technical Proficiencies</h3> -->
			<table class="table-auto border-separate border-spacing-y-4">
				<thead>
					<tr>
						<th class="w-1/4"></th>
						<th class="w-3/4"></th>
					</tr>
				</thead>
				<tbody class="align-text-top leading-relaxed">
					<tr>
						<td class="font-normal">Data Science and Analytics:</td>
						<td class="font-light">Python, NumPy, Pandas, Seaborn, Scikit-learn, PyTorch, HuggingFace, BeautifulSoup, Selenium, Google Colab, Paperspace</td>
					</tr>
					<tr>
						<td class="font-normal align-text-top">Web Development:</td>
						<td class="font-light align-text-top">HTML, CSS, Sass, JavaScript, TypeScript, SQL, ReactJS, Laravel, Django, Java, Java Spring, Celery, Redis, MySQL, Dbeaver, DataGrip</td>
					</tr>
					<tr>
						<td class="font-normal align-text-top">Mobile Development:</td>
						<td class="font-light align-text-top">Dart, Flutter, Android Studio</td>
					</tr>
					<tr>
						<td class="font-normal align-text-top">Others:</td>
						<td class="font-light align-text-top">C, R, Git, GitHub, Visual Studio Code, IntelliJ IDEA, Docker</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="col mt-5 gap-7">
			{#each result as group (group.category.slug)}
				<div class="col gap-5 mb-7">
					<div class="row items-center gap-5">
						<div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
						<p class="text-[var(--main-close)]">{group.category.name}</p>
						<div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 ">
						{#key currentTheme}
							{#each group.items as skill (skill.slug)}
								<Card
									classes={['cursor-pointer decoration-none']}
									tiltDegree={1}
									href={`${base}/skills/${skill.slug}`}
									bgImg={getAssetURL(skill.logo ? skill.logo : Assets.Unknown)}
									color={skill.color}
								>
									<p class="text-[var(--tertiary-text)]">{skill.name}</p>
								</Card>
							{/each}
						{/key}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</SearchPage>
