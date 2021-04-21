export const planetChartData = {
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25
                }
            }]
        }
    }
};

export default planetChartData;