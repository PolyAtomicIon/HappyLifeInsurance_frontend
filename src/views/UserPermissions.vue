<template>
    <div>
        <editors-list></editors-list>
        <shared-with-me></shared-with-me>
    </div>
</template>

<script>

    import EditorsList from '../components/EditorsList'
    import SharedWithMe from '../components/SharedWithMe'

    export default {

        data: () => ({
        }),

        components: {
            EditorsList,
            SharedWithMe
        }

    }
</script>