<script lang="ts">
    import hljs from "highlight.js";

    type LanguageType = "python" | "typescript"

    const { code, language }: { code: string, language: LanguageType } = $props()

    const highlight = hljs.highlight(code, {
        language: language
    }).value
</script>

<div class="rounded-lg p-4 w-[100%] overflow-auto bg-slate-700">
    {@html highlight}
</div>