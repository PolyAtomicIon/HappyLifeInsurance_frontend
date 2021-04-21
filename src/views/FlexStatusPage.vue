<template>
    <div>

        <v-sheet rounded="lg" elevation="2">
            <v-container>
                <flex-status-chart />
            </v-container>
        </v-sheet>

        <v-sheet rounded="lg" class="mt-6 mb-8" elevation="2">
            <v-container>
                <h2 class="text-center my-4">Work hours</h2>
                <work-hours-chart />
            </v-container>
        </v-sheet>

    </div>
</template>

<script>
    
    import WorkHoursChart from '../components/WorkHoursChart.vue'
    import FlexStatusChart from '../components/FlexStatusChart.vue'

    export default {

        data: () => ({
        }),

        components: {
            WorkHoursChart,
            FlexStatusChart,
        }

    }
</script>