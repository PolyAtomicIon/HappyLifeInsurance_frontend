<template>
    <v-card
        class="rounded-0 rounded-bl rounded-br"
        height="400px" 
    >
        <v-card-title class="white--text primary-color">
            Editors List
        </v-card-title>
        
        <v-card-text class="pt-4">
            You are allowed to give acces to edit your entries atmost for 2 employees 
        </v-card-text>
    
        <v-divider></v-divider>

        <v-list>
            <v-list-item v-if="editors.length >= limit">    
                <v-list-item-content>
                    <v-list-item-title class="pl-2 red--text"> You've reached maximum number of editors. Limit is {{limit}} </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-else>
    
                <v-list-item-content>
                    <v-list-item-title class="pl-2"> Enter email of the editor </v-list-item-title>
                    <v-text-field     
                        v-model="newUserEmail"
                        clearable

                        label="Email address"
                        value="example"
                        suffix="@gmail.com"

                        class="mt-0 pt-6 px-2"
                    >
                    </v-text-field>
                </v-list-item-content>
    
                <v-list-item-action>
                    <v-btn
                        color="white"
                        class="text--primary "
                        fab
                        small
                        @click="Add(newUserEmail)"
                    >   
                        <v-icon center>mdi-plus</v-icon>
                    </v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>

        <v-overlay
            :z-index="zIndex"
            :value="overlay"
        >

            <v-card max-width="384px" class="pb-6 white">
                <v-card-title class="black--text text-center">Are you sure to delete this user from list of editors?</v-card-title>
                    <div
                        class="d-flex flex-row justify-space-around" 
                    >
                        <v-btn
                            color="primary-color"
                            @click="overlay = false, Remove(userToBeRemoved)"
                        >
                            yes
                        </v-btn>
                        <v-btn
                            color="error"
                            @click="overlay = false, cancelRemoval()"
                        >
                            Cancel
                        </v-btn>
                    </div>
            </v-card>
        </v-overlay>

        <v-divider></v-divider>

        <v-virtual-scroll
            :items="editors"
            :item-height="50"
            height="125"
        >
            <template v-slot:default="{ item }">
            <v-list-item class=mt-2>
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
                    color="error"
                    @click="overlay = !overlay, startRemovalOfUserFromList(item.id)"
                >
                    Delete
                    <v-icon
                        color="white "
                        right
                    >
                        mdi-delete
                    </v-icon>
                </v-btn>
                </v-list-item-action>
            </v-list-item>
            </template>
        </v-virtual-scroll>
    </v-card>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapMutations } from 'vuex';
import { response } from 'express';


    export default {
        name: "Editors",
        data: () => ({
            colors: ['#2196F3', '#90CAF9'],
            limit: 2,
            exampleItem: 
                {
                    color: '#2196F3',
                    fullName: `BRO BRO`,
                    initials: `B R`,
                    email: 'bro_bro@gmail.com',
                    id: 1,
                },
            items: [
                {
                    color: '#2196F3',
                    fullName: "BRO BRO",
                    initials: "B R",
                    email: 'bro_bro@gmail.com',
                    id: 1,
                },
                
            ],
            overlay: false,
            zIndex: 2,
            userToBeRemoved: null,
            newUserEmail: null,
            editors: []
        }), 
        methods: {

            startRemovalOfUserFromList(userId){
                console.log(userId)
                this.userToBeRemoved = userId;
            },

            cancelRemoval(){
                this.userToBeRemoved = null
            },

            Add(email) {
                axios.post(this.server_url + 'add_editor', {
                    email: email
                })
                .then(
                    this.fetchEditors()
                )
            },

            Remove(email) {
                axios.post(this.server_url + 'delete_editor', {
                    email: email
                })
                .then(
                    this.fetchEditors()
                )
            },

            fetchEditors(){

                axios.get(this.server_url + 'get_editors')
                .then(
                    response => {
                        console.log(response.data)
                        this.editors = response.data;
                    }
                )

            }

        },
        computed: {
            ...mapGetters(['editors', 'server_url']),
        }
    }
</script>