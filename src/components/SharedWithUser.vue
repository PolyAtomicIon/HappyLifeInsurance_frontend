
<template>
    <v-card
        class="rounded-0 rounded-bl rounded-br"
        :height="height"
    >
        <v-card-title class="white--text primary-color">
            Shared with me
    
            <v-spacer></v-spacer>
    
        </v-card-title>
    
        <v-card-text class="pt-4">
            You can edit entries of the following users, they gave you access to edit their entries.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-text v-if="isInEditor" class="primary-color-text ">
            <b>Currently being edited: </b>
            {{userToEdit}}
        </v-card-text>
        <v-divider v-if="isInEditor"></v-divider>

        <v-list-item v-if="isInEditor">
            <v-list-item-content>
            <v-btn 
                color="primary-color" 
                @click="$emit('addEntry')"
                :disabled="!userToEdit"
            >
                <v-icon class="mr-2">
                mdi-plus
                </v-icon>
                Register Entry
            </v-btn>
            </v-list-item-content>
        </v-list-item>

        <v-divider class="my-2" v-if="isInEditor"></v-divider>
    
        <v-virtual-scroll
            :items="shared"
            :item-height="50"
            min-height="125"
        >
            <template v-slot:default="{ item }">
                <v-list-item v-if="item.id">
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
                            Edit
            
                            <v-icon
                                color="orange darken-4"
                                right
                            >
                                mdi-open-in-new
                            </v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>

                <v-list-item 
                    v-if="error(item)"          
                    class="error"
                >
                    <v-list-item-content>
                        The user id is not specified
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-virtual-scroll>

    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Foo',

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters(['items']),
    error (item) {
      return !item.id
    }
  }
}
</script>

