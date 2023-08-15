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
    <CommingSoonCard name="Project: Cane's"  
    link="/projects/spacegame"
    desc="A 3D space RPG set after the 'Rapture' where all organic life was wiped from space, the only thing left is space stations and barren rocks where planets full of life used to be."
    />

    <CommingSoonCard name="JB Stepan Ecosystem"  
    link="/projects/ecosystem"
    desc="A non 'big tech' ecosystem that will provide a lot of productivity apps. "
    />

    <Footer />
</main>

<style>
    main {
        margin-top: 6rem;
    }
</style>