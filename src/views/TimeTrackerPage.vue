<template>
        
    <!-- <v-container> -->

        <!-- <v-row>
            <v-col 
                cols="12"
                lg="4"
            >
                <interesting-card></interesting-card>
            </v-col>
        </v-row> -->
        <!-- <v-row>
            <v-col 
                cols="12"
                lg="12"
            > -->
            <div class="calendar-container">
                <calendar-app 
                    :types="types"
                />
            </div>
            <!-- </v-col>
        </v-row>
    </v-container> -->
    
</template>

<script>
    // import InterestingCard from '../components/InterestingCard.vue'
    import CalendarApp from '../components/CalendarApp.vue';
    import { Units } from 'dayspan'

    export default {

        data: () => ({
            types: [
                {id: 'D', label: 'day', shortcut: 'D', type: Units.DAY,   size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
                {id: 'W', label: 'week', shortcut: 'W', type: Units.WEEK,  size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
            ]
        }),

        components: {
            CalendarApp,
            // InterestingCard
        },

    }
</script>

<style scoped>
    .calendar-container {
        background: green;
        height: 100%;
        width: 50vw;
    }
    .v-application--wrap {
        min-height: 50vh;
  }
</style>