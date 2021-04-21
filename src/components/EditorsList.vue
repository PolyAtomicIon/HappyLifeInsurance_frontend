<template>
    <v-card
        class="rounded-0"
        height="400px" 
    >
        <v-card-title class="white--text indigo darken-1">
            Editors List
        </v-card-title>
        
        <v-card-text class="pt-4">
            You are allowed to give acces to edit your entries atmost for 2 employees 
        </v-card-text>
    
        <v-divider></v-divider>

        <v-list>
            <v-list-item v-if="items.length <= limit">    
                <v-list-item-content>
                    <v-list-item-title class="pl-2 red--text"> You've reached maximum number of editors. Limit is {{limit}} </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-else>
    
                <v-list-item-content>
                    <v-list-item-title class="pl-2"> Enter email of the editor </v-list-item-title>
                    <v-text-field     
                        v-model="message1"
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
                <v-card-content >
                    <div
                        class="d-flex flex-row justify-space-around" 
                    >
                        <v-btn
                            color="primary"
                            @click="overlay = false"
                        >
                            yeas
                        </v-btn>
                        <v-btn
                            color="error"
                            @click="overlay = false"
                        >
                            Cancel
                        </v-btn>
                    </div>
                </v-card-content>
            </v-card>
        </v-overlay>

        <v-divider></v-divider>

        <v-virtual-scroll
            :items="items"
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
                    @click="overlay = !overlay"
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


    export default {
        name: "Editors",
        data: () => ({
            colors: ['#2196F3', '#90CAF9'],
            limit: 2,
            items: [
                {
                    color: '#2196F3',
                    fullName: `BRO BRO`,
                    initials: `B R`,
                },
                {
                    color: '#90CAF9',
                    fullName: `BsdfsRO sdfs`,
                    initials: `S E`,
                },
            ],
            overlay: false,
            zIndex: 0,
            }),

    }
</script>