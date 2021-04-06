<template>
        
    <v-sheet class="my-5" rounded="lg">
        <calendar-app />
    </v-sheet>

</template>

<script>
    import CalendarApp from '../components/CalendarApp.vue';

    export default {

        data: () => ({
            ecosystem: [],
            title: 'Cars in market',
        }),

        components: {
            CalendarApp,
        }

    }
</script>