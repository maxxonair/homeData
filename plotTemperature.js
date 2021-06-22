

// Create charts:
chartTemperature() ();

async function chartTemperature() { 
  const datap = await getData();
  const CHART = document.getElementById("chartTemperature");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
      labels: datap.timeVec,
        datasets: [{
          label: 'Temperture [C]',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: datap.tempVec,
          xAxisID: 'Time',
      }]
    }
  });

}

