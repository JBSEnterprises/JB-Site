<script lang="ts">
    export let name: string;
    export let desc: string;
    export let website: string;
</script>

<div class="basis-[25%] rounded-lg bg-[#4a4a4a] p-3 text-pretty text-start border-black">
    <h1 class="text-3xl font-bold">{name}</h1>
    <p class=" mt-1 mb-1">{desc}</p>
    <a class="no-underline font-bold" target="_blank" rel="noopener noreferrer" href="https://{website}">Link</a>
</div>

<style>
    div {
        transition: 300ms;
        transform: scale(1);
    }

    div:hover {
        transition: 300ms;
        transform: scale(1.08);
    }
</style>