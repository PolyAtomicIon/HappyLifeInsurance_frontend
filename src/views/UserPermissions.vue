<template>
    <v-sheet rounded="lg" elevation="2" >

        <v-toolbar
            color="indigo lighten-1"
            dark
            class="rounded-tr rounded-tl"
            flat
        >
            <v-toolbar-title>Permissions</v-toolbar-title>

            <v-spacer></v-spacer>

            <template v-slot:extension>
                <v-tabs
                    v-model="tab"
                    align-with-title
                >
                    <v-tabs-slider color="yellow"></v-tabs-slider>

                    <v-tab
                        v-for="item in items"
                        :key="item"
                    >
                        {{ item }}
                    </v-tab>
                </v-tabs>
            </template>
        </v-toolbar>

        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="item in items"
                :key="item"
            >
            
                <keep-alive>
                    <component v-bind:is="items[tab]" height="400px"></component>
                </keep-alive>

            </v-tab-item>
        </v-tabs-items>
    </v-sheet>
</template>

<script>

    import EditorsList from '../components/EditorsList'
    import SharedWithMe from '../components/SharedWithMe'

    export default {

        data: () => ({
            tab: null,
            items: [
                'Editors', 'Shared',
            ],
            
        }),

        components: {
            'Editors': EditorsList,
            'Shared': SharedWithMe
        }

    }
</script>