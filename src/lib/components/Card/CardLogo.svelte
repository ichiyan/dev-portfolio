<script lang="ts">
	export let src: string;
	export let alt: string;
	// export let size = 50;
	export let height: number;
	export let width: number;
	export let radius = '15px';
	export let classes = '';
</script>

<img class={`rounded-${radius} ${classes} aspect-square`} {src} {alt} height={height} width={width} />
