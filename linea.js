var ctx = document.getElementById('myChart').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',        

    // The data for our dataset
    data: {
        
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            fill:false,
            label: 'Presion',
            backgroundColor: 'rgb(222, 199, 12)',
            borderColor: 'rgb(222, 199, 12)',
            data: [20, 20, 20, 20, 20, 20, 20]
        }]
    },

    // Configuration options go here
    options: {
        scales: {
        yAxes : [{
            ticks : {
                max : 10,    
                min : 20
            }
        }]
    }}
});

var chart2 = new Chart(ctx2, {
    // The type of chart we want to create
    type: 'line',        

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            fill:false,
            label: 'Voltaje',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [20, 20, 20, 20, 20, 20, 20]
        }]
    },

    // Configuration options go here
    options: {scales: {
        yAxes : [{
            ticks : {
                max : 10,    
                min : 20
            }
        }]
    }}
});


setInterval( () =>{
    
  pushData(getRandomArbitrary(13,14))
  pushData2(getRandomArbitrary(13,14))  

} , 800)

function pushData (dato){
    listaActual = [];
    console.log(chart.data.datasets[0].data.length)

    for ( var i = 0; i < chart.data.datasets[0].data.length-1; i++ ) {
        listaActual.push(chart.data.datasets[0].data[i])
     }
     console.log(listaActual.length)
    
    listaActual.push(dato);
    listaActual.push(dato);
    listaActual.shift();
    chart.data.datasets[0].data = listaActual;
    
    chart.update();
}


function pushData2 (dato){
    listaActual = [];
    console.log(chart2.data.datasets[0].data.length)

    for ( var i = 0; i < chart2.data.datasets[0].data.length-1; i++ ) {
        listaActual.push(chart2.data.datasets[0].data[i])
     }
     console.log(listaActual.length)
    
    listaActual.push(dato);
    listaActual.push(dato);
    listaActual.shift();
    chart2.data.datasets[0].data = listaActual;
    
    chart2.update();
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }