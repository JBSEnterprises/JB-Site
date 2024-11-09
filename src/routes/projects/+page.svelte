<script lang="ts">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import ProjectCard from "../../components/ProjectCard.svelte";
    
    interface Projects {
        name: string,
        desc: string,
        website: string,
        links?: string[]
    }

    const projects: Projects[] = [
        { name: "WeatherInbox", desc: "Get a daily email with your personalized forecast of the weather.", website: "weatherinbox.net"},
        { name: "Space Sandbox Horror Game", desc: "A pre-devolpment game thats sorta based on Notch's 0x10c", website: "jshort.xyz/space-horror-game" },
        { name: "JB Stepan URL Shortener", desc: "A dead simple url shortener", website: "jshort.xyz" },
    ]

</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<NavBar />

<main class="mt-[6rem]">
    
    <div class="flex justify-center flex-row flex-wrap gap-6 mt-4">
        {#each projects as pro }
            <ProjectCard name={pro.name} desc={pro.desc} website={pro.website} />
        {/each}
    </div>

    <Footer />
</main>
