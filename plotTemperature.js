

// Create charts:
chartTemperature() ();

async function chartTemperature() { 
  await getData();
  const CHART = document.getElementById("chartTemperature");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
      labels: timeVec,
        datasets: [{
          label: 'Temperture [C]',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: tempVec,
          xAxisID: 'Time',
      }]
    }
  });

}

