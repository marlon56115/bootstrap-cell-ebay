var ctx1 = document.getElementById("MasVendidosDia").getContext('2d');
var MasVendidosDia = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ["J6", "Iphone 12", "Note 10", "One Plus 6", "Redmi note 9", "Rog phone"],
        datasets: [{
            label: 'Ocultar',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Modelo'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Unidades'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


var datapoints = [0, 20, 20, 60, 60, 120];
var config = {
    type: 'line',
    data: {
        labels: ['$0', '$100', '$200', '$300', '$400', '$800'],
        datasets: [{
            label: 'Ocultar',
            data: datapoints,
            borderColor: 'red',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            fill: false,
            lineTension: 0
        }]
    },
    options: {
        responsive: true,
        title: {
            display: false,
            text: 'Chart.js Line Chart - Cubic interpolation mode'
        },
        tooltips: {
            mode: 'index'
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Precio'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Unidades'
                },
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 200,
                }
            }]
        }
    }
};
var ctx2 = document.getElementById("masCaros").getContext('2d');
var masCaros = new Chart(ctx2, config)



var mejorPuntuados = document.getElementById("mejorPuntuados");
//Chart.defaults.global.defaultFontFamily = "Lato";
//Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "Samsung",
        "Huawei",
        "Xiaomi"
    ],
    datasets: [
        {
            data: [10, 60, 30],
            backgroundColor: [
                "#FF6384",
                "rgba(75, 192, 192, 1)",
                "#84FF63"
            ]
        }],
        options:{
            responsive: true
        }
};

var pieChart = new Chart(mejorPuntuados, {
  type: 'pie',
  data: oilData
});




var ctx3 = document.getElementById("categoriasDestacadas").getContext('2d');
var MasVendidosDia = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["J6", "Iphone 12", "Note 10", "One Plus 6", "Redmi note 9", "Rog phone"],
        datasets: [{
            label: 'Ocultar',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Modelo'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Unidades'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});