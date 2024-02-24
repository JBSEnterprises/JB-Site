<script lang="ts">
    import Construct from "../images/construct.png"

    export let pageName = ""
    export let backLink = "" || "/projects"
</script>

<main>
    <div class="flex justify-center items-center"><img src={Construct} alt="Under construction"></div>
    <h1 class="text-3xl font-bold p-4">Woah!</h1>
    <p class="p-4">You've stumbled upon something that is currently being worked on 🤯! <br> Stay tuned for updates on <b>{pageName}</b> by following my Blog!</p>
    <a class="mt-6" href={backLink}>Back</a>
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