<script lang="ts">
  import NavBar from "../../components/NavBar.svelte";
  import ComingSoon from "../../components/ComingSoon.svelte";
</script>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<main>
  <NavBar />
  <ComingSoon backLink="/" pageName="Contact Form" />
  <!-- <form action="">
        
  </form> -->
</main>

<style>
    main {
      text-align: center;
      margin-top: 6.5rem;
    }
  
    p {
      font-size: large;
    }
</style>
  