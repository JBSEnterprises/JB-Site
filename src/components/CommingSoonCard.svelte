<script lang="ts">
    export let name = ""
    export let link = ""
    export let desc = ""
    export let img = ""
</script>

<main>
    {#if img != undefined}
        <img src={img} alt="">
    {/if}
    <h1>{name}</h1>
    <p>{desc}</p>
    <a href={link}>Learn More!</a>
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
        display: flexbox;
        justify-content: center;
        text-align: center;
        padding: 15px;
        margin: 5rem;
        width: auto;
        border: 2px solid rgba(255, 255, 255, 0.87);
        overflow: auto;
    }

    a {
        transition: 500ms;
        color: rgb(78, 72, 232);
        text-decoration: none;
        font-weight: bold;
        scale: 1;
    }

    /* Change the link color to #111 (black) on hover */
    a:hover {
        color: rgb(128, 124, 242);
        scale: 1.5;
    }
</style>