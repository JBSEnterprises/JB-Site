<script lang="ts">
    import Footer from "../../components/Footer.svelte";
    import NavBar from "../../components/NavBar.svelte";

 
    let { children } = $props() 
</script>

<NavBar />
{@render children()}
<Footer />