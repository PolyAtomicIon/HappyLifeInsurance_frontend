<template>
    <div class="chart-container">
        <canvas id="work-hour-chart" > </canvas> 
    </div> 
</template>

<script >
    import Chart from 'chart.js'

    export default {
        name: 'WorkHoursChart',
        data() {
            return {
                planetChartData:  {
                    type: "bar",
                    data: {
                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        datasets: [
                            // {
                            //     label: "Number of Moons",
                            //     type: "line",
                            //     data: [0, 0, 1, 2, 79, 82, 27, 14],
                            //     backgroundColor: "rgba(54,73,93,.5)",
                            //     borderColor: "#36495d",
                            //     borderWidth: 3
                            // },
                            {
                                label: "Work hours",
                                type: "bar",
                                data: [2, 3, 4, 7, 6, 1],
                                backgroundColor: "rgba(71, 183,132,.5)",
                                borderColor: "#47b784",
                                borderWidth: 3
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        lineTension: 1,

                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: 'Work-Hours Bar Chart'
                        },

                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    suggestedMax: 8,
                                    padding: 25
                                }
                            }]
                        },
                        maintainAspectRatio: false,
                    }
                },
            }
        },
        mounted() {
            const ctx = document.getElementById('work-hour-chart');
            new Chart(ctx, this.planetChartData);
        }

    } 
</script>

<style scoped>
    .chart-container{
        height: 384px;
    }
</style>