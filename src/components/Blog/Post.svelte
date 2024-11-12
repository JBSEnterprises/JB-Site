<script lang="ts">
    import Footer from "../Footer.svelte";
    import NavBar from "../NavBar.svelte";
    import type { Snippet } from 'svelte';

    const { title, brief, body, image="" }: {
        title: String,
        brief: String,
        body: Snippet,
        image: String
    } = $props()
</script>

<!--Post Header-->
<div>

</div>
<!--Post Content-->
<div>
    {@render body()}
</div>
<!--Post Footer-->
<div>

</div>