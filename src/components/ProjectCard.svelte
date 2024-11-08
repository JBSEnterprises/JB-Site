<script lang="ts">

    let { name="", desc="", website="", links=undefined } = $props()
</script>

<div class="basis-[25%] rounded-lg bg-[#4a4a4a] p-3 text-pretty text-start border-black transition duration-300 scale-100 hover:scale-[1.08]">
    <h1 class="text-3xl font-bold">{name}</h1>
    <p class=" mt-1 mb-1">{desc}</p>
    <a class="no-underline font-bold relative bottom-0 text-blue-500" target="_blank" rel="noopener noreferrer" href="https://{website}">Site</a>
</div>
