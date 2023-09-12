<svelte:head>
    <title>Projects</title>
</svelte:head>

<script lang="ts">
    import CommingSoonCard from "../../components/CommingSoonCard.svelte";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
    <title>Projects</title>
</svelte:head>

<NavBar />

<main>
    
    <CommingSoonCard name="JB Weather" 
    link="/projects/weather" 
    desc="JB Weather offers AI enfused weather reports for the common person" 
    />

    <Footer />
</main>

<style>
    main {
        margin-top: 6rem;
        justify-content: center;
    }
</style>