<script lang="ts">
    import CommingSoonCard from "../../components/CommingSoonCard.svelte";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";
    import ComingSoon from "../../components/ComingSoon.svelte";

    const projects = [
        { name: "JB Stepan Mods", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus malesuada justo sed ultricies. Curabitur vel mattis risus. Sed at pharetra sapien. Cras euismod dui nec nisi varius, id dapibus tortor consectetur. Morbi imperdiet quam ligula, non imperdiet sapien lacinia vitae. Vivamus ultrices eros eros, vitae sodales nisl gravida vitae. Integer elit augue, interdum nec consectetur non, consequat ullamcorper justo. Donec vitae imperdiet dui. Nullam at velit ut est sodales cursus. Fusce vel enim eu nulla commodo sagittis.", website: "mods.jbstepan.com"},
        { name: "JB Stepan 1", desc: "A place for mods", website: "mods.jbstepan.com"},
        { name: "JB Stepan 2", desc: "A place for mods", website: "mods.jbstepan.com"},
    ]

</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<NavBar />

<main class="mt-[6rem]">
    
    <div class="flex justify-center flex-row flex-wrap gap-6 mt-4">
        { #each projects as pro }
            <ProjectCard name={pro.name} desc={pro.desc} website={pro.website} />
        {/each}
    </div>

    <Footer />
</main>