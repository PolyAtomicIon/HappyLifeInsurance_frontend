<template>
    <div class="chart-container">
        <canvas id="flex-status-chart" > </canvas> 
    </div> 
</template>

<script >
    import Chart from 'chart.js'
    
    export default {
        name: 'PlanetChart',
        data() {
            return {
                planetChartData:  {
                    type: "horizontalBar",
                    data: {
                        labels: ["Hours"],
                        datasets: [
                            {
                                label: "Reserved Hours",
                                type: "horizontalBar",
                                data: [],
                                backgroundColor: "rgba(71, 183,132,.5)",
                                borderColor: "#47b784",
                                borderWidth: 1
                            },
                            {
                                label: "Debt Hours",
                                type: "horizontalBar",
                                data: [],
                                backgroundColor: "rgba(173, 24, 121, .5)",
                                borderColor: "#851b60",
                                borderWidth: 1
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,
                        legend: {
                            position: 'left',
                        },
                        title: {
                            display: true,
                            text: 'Flex-status'
                        },
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    suggestedMax: 20,
                                }
                            }]
                        },
                        maintainAspectRatio: false,
                    }
                },
            }
        },
        mounted() {
        },

        props: {
            reserved_hours: {
                required: true,
            },
            debt_hours: {
                required: true,
            }
        },
        watch: {
            reserved_hours: function(val){       
                this.planetChartData.data.datasets[0].data = [];
                this.planetChartData.data.datasets[0].data.push(val);
                    
                const ctx = document.getElementById('flex-status-chart');
                new Chart(ctx, this.planetChartData);
            },
            debt_hours: function(val){       
                this.planetChartData.data.datasets[1].data = [];
                this.planetChartData.data.datasets[1].data.push(-val);
                    
                const ctx = document.getElementById('flex-status-chart');
                new Chart(ctx, this.planetChartData);
            }
        }

    } 
</script>

<style scoped>
    .chart-container{
        height: 112px;
        /* width: 512px; */
    }
</style>