<script lang="ts">
    import Construct from "../images/construct.png"

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
    main {
        text-align: center;
        margin-top: 10rem;
    }

    a {
        transition: 500ms;
        scale: 1;
        color: rgb(78, 72, 232);
        text-decoration: none;
        font-weight: bold;
    }

    a:hover {
        color: rgb(128, 124, 242);
        scale: 1.5;
    }
</style>