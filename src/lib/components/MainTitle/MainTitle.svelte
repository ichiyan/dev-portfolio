<script lang="ts">
	export let classes = '';
</script>

<h1
	class={`font-[var(--title-f)] font-bold tracking-[2px] text-center text-2.5em sm:text-[3em] md:text-[3.5em] lg:text-[4em] ${classes}`}
	style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
>
	<slot />
</h1>
