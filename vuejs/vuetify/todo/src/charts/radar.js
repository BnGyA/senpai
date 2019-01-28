var immunoData = {
    labels: ['PD-L-1', 'CD8', 'TMB', 'MSI', 'MUT-SENSI'],
    datasets: [{
        label: 'Immuno',
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [65, 75, 70, 80, 60],
        pointHoverRadius: 10,
    }]
}

var immunoOptions = {
    scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 10
        },
        pointLabels: {
          fontSize: 14
        }
      },
      legend: {
        position: 'right'
      }
}

export const radar = {
    type: 'radar',
    data: immunoData,
    options: immunoOptions
}

export default radar;