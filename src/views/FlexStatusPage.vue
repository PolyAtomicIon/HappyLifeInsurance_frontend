<template>
    <v-container>
        <v-sheet>
            <h2 class="text-center my-4">Flex-status</h2>
            <planet-chart />
        </v-sheet>
    </v-container>
</template>

<script>
    
    import PlanetChart from '../components/PlanetChart.vue'

    export default {

        data: () => ({
        }),

        components: {
            PlanetChart,
        }

    }
</script>