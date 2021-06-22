

// Create charts:
chartHumidity() ();

async function chartHumidity() { 
  const datap = await getData();
  const CHART = document.getElementById("chartPressure");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
      labels: datap.timeVec,
        datasets: [{
          label: 'Pressure [kPa]',
          backgroundColor: 'rgb(0,0,128)',
          borderColor: 'rgb(0,0,128)',
          data: datap.presVec,
          xAxisID: 'Time',
      }]
    }
  });

}

