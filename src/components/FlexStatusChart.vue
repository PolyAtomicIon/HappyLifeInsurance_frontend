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
                                label: "Reserved",
                                type: "horizontalBar",
                                data: [2],
                                backgroundColor: "rgba(71, 183,132,.5)",
                                borderColor: "#47b784",
                                borderWidth: 1
                            },
                            {
                                label: "Debts",
                                type: "horizontalBar",
                                data: [-2],
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
                            text: 'Flex-status Bar Chart'
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
            const ctx = document.getElementById('flex-status-chart');
            new Chart(ctx, this.planetChartData);
        }

    } 
</script>

<style scoped>
    .chart-container{
        height: 112px;
    }
</style>