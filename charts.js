google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(() => drawChart([12,31,12]));


      function drawChart(arregloDeDatos) {

            

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Valor'],
          ['Voltaje', arregloDeDatos[0]],
        //   ['CPU', 55],
        //   ['Network', 68]
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Label', 'Valor'],
          ['Temp', arregloDeDatos[1]],
        //   ['Network', 68]
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Label', 'Valor'],
          ['Presion', arregloDeDatos[2]]
        ]);

        var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
        };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
        var chart2 = new google.visualization.Gauge(document.getElementById('chart_div2'));
        var chart3 = new google.visualization.Gauge(document.getElementById('chart_div3'));

        chart.draw(data, options);
        chart2.draw(data2, options);
        chart3.draw(data3, options);
      }