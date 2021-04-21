<template>
    <v-card
        class="rounded-0 rounded-bl rounded-br"
        :height="height"
    >
        <v-card-title class="white--text indigo darken-1">
            Shared with me
    
            <v-spacer></v-spacer>
    
        </v-card-title>
    
        <v-card-text class="pt-4">
            You can edit entries of the following users, they gave you access to edit their entries.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text v-if="isInEditor" class="indigo--text darken-1">
            <b>Currently being edited: </b>
            {{userToEdit}}
        </v-card-text>
        <v-divider v-if="isInEditor"></v-divider>
    
        <v-virtual-scroll
            :items="items"
            :item-height="50"
            min-height="125"
        >
            <template v-slot:default="{ item }">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-avatar
                            :color="item.color"
                            size="56"
                            class="white--text"
                        >
                            {{ item.initials }}
                        </v-avatar>
                    </v-list-item-avatar>
        
                    <v-list-item-content>
                    <v-list-item-title>{{ item.fullName }}</v-list-item-title>
                    </v-list-item-content>
        
                    <v-list-item-action>
                        <v-btn
                            depressed
                            small
                            @click="setUserToEdit(item.id), $router.push({ name: 'shared-with' })"
                        >
                            Edit user's entries
            
                            <v-icon
                                color="orange darken-4"
                                right
                            >
                                mdi-open-in-new
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </template>
        </v-virtual-scroll>

    </v-card>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex';

    export default {
        name: "Shared",
        data: () => ({
            colors: ['#2196F3', '#90CAF9'],
            items: [
                {
                    color: '#2196F3',
                    fullName: `BRO BRO`,
                    initials: `B R`,
                    id: 1
                },
                {
                    color: '#90CAF9',
                    fullName: `BsdfsRO sdfs`,
                    initials: `S E`,
                    id: 2,
                },
            ]
            }),
        methods: {
            ...mapMutations(['setUserToEdit']),
        },
        computed: {
            ...mapGetters(['userToEdit']),
        },
        props: {
            height: {
                default: '325px'
            },
            isInEditor: {
                dafault: false
            }
        }
    }
</script>
