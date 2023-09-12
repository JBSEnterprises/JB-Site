<svelte:head>
    <title>Projects</title>
</svelte:head>

<script lang="ts">
    import CommingSoonCard from "../../components/CommingSoonCard.svelte";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
</script>

<NavBar />

<main>
    
    <CommingSoonCard name="JB Weather" 
    link="/projects/weather" 
    desc="JB Weather offers AI enfused weather reports for the common person" 
    />
    
    <!-- <CommingSoonCard name="Project: Cane's"  
    link="/projects/spacegame"
    desc="A 3D space RPG set after the 'Rapture' where all organic life was wiped from space, the only thing left is space stations and barren rocks where planets full of life used to be."
    /> -->

    <Footer />
</main>

<style>
    main {
        margin-top: 6rem;
        justify-content: center;
    }
</style>