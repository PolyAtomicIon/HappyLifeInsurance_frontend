<template>

    <v-container>
        <v-row>
            <v-col>
                <v-sheet rounded="lg" class="mt-0 mb-8" elevation="2">
                    <v-container>
                        <v-row>

                            <v-col cols="12" md="3" sm="12">
                                <v-card elevation="1" class="mt-5" color="grey lighten-5">

                                    <v-card-title>
                                        <h5>{{flexStatus.start_date}} - {{flexStatus.end_date}}  </h5>
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            icon
                                            depressed
                                        >
                                            <v-icon>keyboard_arrow_left</v-icon>
                                        </v-btn> 
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            icon
                                            depressed
                                        >
                                            <v-icon>keyboard_arrow_right</v-icon>
                                        </v-btn>
                                    </v-card-title>

                                </v-card>

                            </v-col>

                            <v-col cols="12" md="9" sm="12">
                                <!-- <v-sheet elevation="2" rounded=""> -->
                                <flex-status-chart 
                                    :reserved_hours="flexStatus.reserved_hours"
                                    :debt_hours="flexStatus.debt_hours"
                                />
                                <!-- </v-sheet> -->
                            </v-col>

                        </v-row>

                        <v-row>
                            <v-col>
                                <work-hours-chart 
                                    :work_hours="flexStatus.work_hours"
                                />
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
    import { mapGetters, mapMutations } from 'vuex'
    import axios from 'axios'

    export default {

        data: () => ({
        }),
        mounted() {
            this.fetchFlexStatus();
        },
        computed: {
            ...mapGetters(['flexStatus']),
        },

        components: {
            WorkHoursChart,
            FlexStatusChart,
        },

        methods: {
            ...mapMutations(['setFlexStatus']),
            
            fetchFlexStatus(){

                axios.get("https://next.json-generator.com/api/json/get/V10R1FkU9")
                .then(
                    response => {
                        let data  = response.data[0];
                        let work_hours = [];

                        // console.log(response.data[0])
                        data.daily_work_hours.forEach(element => {
                            work_hours.push(element.hours)
                        });

                        console.log(work_hours)

                        let flexStatus = {}

                        let date = new Date(data.start_date);

                        let day = date.getDate();
                        let month = data.start_date.substr(3, 4);
                        flexStatus.start_date = month + ' ' + day
                        
                        date = new Date(data.end_date);

                        day = date.getDate();
                        month = data.start_date.substr(3, 4);
                        flexStatus.end_date = month + ' ' + day

                        flexStatus.work_hours = work_hours

                        flexStatus.reserved_hours = data.reserved_hours
                        flexStatus.debt_hours = data.debt_hours

                        this.setFlexStatus(flexStatus)
                    }
                )

            }
        },

    }
</script>