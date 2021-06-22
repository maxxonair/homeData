

// Create charts:
chartHumidity() ();

async function chartHumidity() { 
  const datap = await getData();
  const CHART = document.getElementById("chartHumidity");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
      labels: datap.timeVec,
        datasets: [{
          label: 'Humidity [%]',
          backgroundColor: 'rgb(0,191,255)',
          borderColor: 'rgb(0,191,255)',
          data: datap.humVec,
          xAxisID: 'Time',
      }]
    }
  });

}

