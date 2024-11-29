<script lang="ts">
    import '../app.css'

    import hljs from 'highlight.js';
    import 'highlight.js/styles/xcode.min.css'
    import typescript from 'highlight.js/lib/languages/typescript';
    import python from 'highlight.js/lib/languages/python'


    hljs.registerLanguage("typescript", typescript)
    hljs.registerLanguage("python", python)
</script>

<slot />