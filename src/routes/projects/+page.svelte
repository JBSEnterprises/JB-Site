<script lang="ts">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";

    const projects = [
        { name: "WeatherInbox", desc: "Get a daily email with your personalized forecast of the weather. This is currently in pre production, but I have a newsletter for those interested. 😁", website: "weatherinbox.net"},
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