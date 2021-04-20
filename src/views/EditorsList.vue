<template>
    <div>
        <v-card
            max-height="265px"
        >
            <v-card-title class="white--text orange darken-4">
                Editors List
        
                <v-spacer></v-spacer>
        
                <v-btn
                color="white"
                class="text--primary"
                fab
                small
                >
                <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-title>
        
            <v-card-text class="pt-4">
                You are allowed to give acces to edit your entriesatmost for 2 employees 
            </v-card-text>
        
            <v-divider></v-divider>
        
            <v-virtual-scroll
                :items="items"
                :item-height="50"
                height="125"
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
                    >
                        View User
        
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

        <v-card
            max-height="265px"
            class="my-4"
        >
            <v-card-title class="white--text indigo darken-4">
                Shared with
        
                <v-spacer></v-spacer>
        
                <v-btn
                color="white"
                class="text--primary"
                fab
                small
                >
                <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-card-title>
        
            <v-card-text class="pt-4">
                You are allowed to give acces to edit your entriesatmost for 2 employees 
            </v-card-text>
        
            <v-divider></v-divider>
        
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
                    >
                        View User
        
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
    </div>
</template>

<script>


    export default {

        data: () => ({
            colors: ['#2196F3', '#90CAF9'],
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
            ]
            }),

    }
</script>