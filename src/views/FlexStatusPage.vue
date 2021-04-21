<template>

    <v-container>
        <v-row>
            <v-col>
                <v-sheet rounded="lg" class="mt-0 mb-8" elevation="2">
                    <v-container>
                        <v-row>

                            <v-col cols="12" md="5" sm="12">
                                <v-card elevation="1" class="mt-5" color="grey lighten-5">

                                    <v-card-title>
                                        <h5>Apr. 21 - Apr. 28  </h5>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            icon
                                            depressed
                                            @click="prev"
                                        >
                                            <v-icon>keyboard_arrow_left</v-icon>
                                        </v-btn> 
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            icon
                                            depressed
                                            @click="next"
                                        >
                                            <v-icon>keyboard_arrow_right</v-icon>
                                        </v-btn>
                                    </v-card-title>

                                </v-card>

                            </v-col>

                            <v-col cols="12" md="7" sm="12">
                                <!-- <v-sheet elevation="2" rounded=""> -->
                                <flex-status-chart />
                                <!-- </v-sheet> -->
                            </v-col>

                        </v-row>

                        <v-row>
                            <v-col>
                                <work-hours-chart />
                            </v-col>
                        </v-row>

                    </v-container>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>

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