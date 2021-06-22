

// Create charts:
chartHumidity() ();

async function chartHumidity() { 
  await getData();
  const CHART = document.getElementById("chartHumidity");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
      labels: timeVec,
        datasets: [{
          label: 'Humidity [%]',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: humVec,
          xAxisID: 'Time',
      }]
    }
  });

}

