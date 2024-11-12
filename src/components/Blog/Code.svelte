<script lang="ts">
    import hljs from "highlight.js";

    const { code, language }: { code: string, language: string } = $props()

    const highlight = hljs.highlight(code, {
        language: language
    }).value
</script>

<pre>
    <code>
        {@html highlight}
    </code>
</pre>