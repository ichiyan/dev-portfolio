<script lang="ts">
	import { computeExactDuration, countMonths, getMonthName } from '$lib/utils/helpers';
	import { theme } from '$lib/stores/theme';
	import Chip from '../Chip/Chip.svelte';
	import Card from '../Card/Card.svelte';
	import CardTitle from '../Card/CardTitle.svelte';
	import CardLink from '../Card/CardLink.svelte';
	import CardDivider from '../Card/CardDivider.svelte';
	import ChipIcon from '../Chip/ChipIcon.svelte';
	import CardLogo from '../Card/CardLogo.svelte';
	import type { Project } from '$lib/types';
	import Assets, { getAssetURL } from '$lib/data/assets';
	import { base } from '$app/paths';
	import UIcon from '../Icon/UIcon.svelte';

	export let project: Project;
	
	let currentTheme: boolean;

	theme.subscribe((v) => (currentTheme = v));

	$: months = countMonths(project.period.from, project.period.to);
	// $: period = `${months} month${months > 1 ? 's' : ''}`;
	// $: period = `${getTimeDiff(
	// 	project.period.from,
	// 	project.period.to ?? new Date(Date.now() + 1000 * 60 * 60 * 24)
	// )}`;
	$: period = computeExactDuration(project.period.from, project.period.to);
	$: from = `${getMonthName(project.period.from.getMonth())} ${project.period.from.getFullYear()}`;
	$: to = project.period.to
		? `${getMonthName(project.period.to.getMonth())} ${project.period.to.getFullYear()}`
		: 'now';

	$: from_year = 	project.period.from.getFullYear()
    $: from_to_year = project.period.to ?  `${from_year} - ${project.period.to.getFullYear()}` : `${from_year}`

</script>

<Card color={project.color} href={`${base}/projects/${project.slug}`}>
	<CardLogo alt={project.name} src={getAssetURL(project.logo ? project.logo: Assets.Unknown)} height={150} width={300} radius={'0'} />
	<div class="m-t-20px row justify-between items-center">
		<CardTitle title={project.name} />
		<div class="row">
			{#each project.links as link}
				<CardLink label={link.label ?? ''} to={link.to} />
			{/each}
		</div>
	</div>
	<CardDivider />
	<div class="col m-b-15px justify-between text-[var(--secondary-text)] text-0.85em">
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-assembly-cluster" classes="text-1.25em" />
			<!-- <p>{project.type}</p> -->
			 <!-- TO DO: format for multiple project types -->
			 {#each project.types as type}
				<p>{type.name}</p>
			 {/each}
		</div>
		<CardDivider />
		<div class="row items-center gap-2">
			<UIcon icon="i-carbon-time" classes="text-1.25em" />
			<!-- <p>{period}</p> -->
			 <p>{from_to_year}</p>
		</div>
		<CardDivider />
		<div class="row justify-between font-400">
			{#if project.awards}
				{#each project.awards as award}
					<Chip classes={`font-500 text-1em`}>{award}</Chip>
				{/each}
			{/if}
		</div>
	</div>
	<div class="col sm:h-100px md:h-150px">
		<p class="text-[0.9em] text-[var(--secondary-text)] m-t-20px m-b-20px flex-1 line-clamp-5">
			{project.shortDescription}
		</p>
	</div>
	<!-- <div class="row justify-between text-0.8em font-400">
		<Chip>{from}</Chip>
		{#if from !== to}
			<Chip>{to}</Chip>
		{/if}
	</div> -->
	<CardDivider />
	<div class="row flex-wrap">
		{#key currentTheme}
			{#each project.skills as tech}
				<ChipIcon
					logo={getAssetURL(tech.logo)}
					name={tech.name}
					href={`${base}/skills/${tech.slug}`}
				/>
			{/each}
		{/key}
	</div>
</Card>
