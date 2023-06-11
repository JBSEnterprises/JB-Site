<script lang="ts">
    import Construct from "../construct.png"

    export let pageName = ""
    export let project = true || false
</script>

<main>
    <img src={Construct} alt="Under construction">
    <h1>Woah!</h1>
    {#if project == true}
        <p>You've stumbled upon a project that is currently being worked on 🤯! <br> Stay tuned for updates on <b>{pageName}</b> by following me on Twitter!</p>
    {:else}
        <p>You've stumbled upon a page that is currently being worked on 🤯! <br> Stay tuned for updates on <b>{pageName}</b> by following me on Twitter!</p>
    {/if}
    <a href="/">Back home</a>
</main>

<style>
    :root {
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        line-height: 1.5;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
  
    main {
        text-align: center;
        margin-top: 10rem;
    }

    a {
        color: rgb(78, 72, 232);
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        color: rgb(128, 124, 242);
    }
</style>