<template>
        
    <!-- <v-container>  -->

        <!-- <v-row>
            <v-col 
                cols="12"
                lg="4"
            >
                <interesting-card></interesting-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                cols="12"
                lg="12"
            > -->
            <div class="calendar-container ">
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
                {id: 'M', label: 'Edit past days', shortcut: 'M', type: Units.MONTH, size: 1,  focus: 0.4999, repeat: true,  listTimes: false, updateRows: true,  schedule: false },
                // {id: 'W', label: 'Week', shortcut: 'W', type: Units.WEEK,  size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
                {id: 'D', label: 'Full Day', shortcut: 'D', type: Units.DAY,   size: 1,  focus: 0.4999, repeat: true,  listTimes: true,  updateRows: true,  schedule: false },
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
        height: calc(100% - 56px);
        margin-bottom: 56px;
        width: 70vw;
    }
    /* .v-application--wrap {
        min-height: 100vh;
    } */
</style>