<template>
    <v-card
        class="rounded-0 rounded-bl rounded-br"
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
            <v-list-item v-if="items.length >= limit">    
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
                        @click="addUserToList()"
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
                            color="primary"
                            @click="overlay = false, removeUserFromList()"
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
        }), 
        methods: {

            startRemovalOfUserFromList(userId){
                console.log(userId)
                this.userToBeRemoved = userId;
            },

            cancelRemoval(){
                this.userToBeRemoved = null
            },

            removeUserFromList(){

                if( !this.userToBeRemoved )
                    return

                let pos = null;

                for(let i = 0; i < this.items.length; i++){
                    if( this.items[i].id === this.userToBeRemoved ){
                        pos = i;
                        break;
                    }
                }

                if( pos === null )
                    return
                console.log(pos)
                this.items.splice(pos, 1);
            },

            addUserToList(){
                let a = Object.assign({}, this.exampleItem.constructor);
                a.email = this.newUserEmail;
                a.id = 2;
                a.fullName = "GF FE";
                a.initials = "G F";
                a.color = '#2196F3';
                this.items.push(a);
            }

        },
    }
</script>