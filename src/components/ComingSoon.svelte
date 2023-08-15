<script lang="ts">
    import Construct from "../images/construct.png"

    export let pageName = ""
</script>

<main>
    <img src={Construct} alt="Under construction">
    <h1>Woah!</h1>
    <p>You've stumbled upon something that is currently being worked on 🤯! <br> Stay tuned for updates on <b>{pageName}</b> by following my Blog!</p>
    <a href="/projects">Back</a>
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