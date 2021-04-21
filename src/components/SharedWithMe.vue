<template>
    <v-card
        class="rounded-0 rounded-bl rounded-br"
        height="400px"
    >
        <v-card-title class="white--text indigo darken-1">
            Shared with me
    
            <v-spacer></v-spacer>
    
        </v-card-title>
    
        <v-card-text class="pt-4">
            You can edit entries of the following users, they gave you access to edit their entries.
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


    export default {
        name: "Shared",
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