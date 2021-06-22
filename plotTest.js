// Last n measurement to be shown in chart
const NR_PLOT_ROWS = 20;
// File delimiter used in input csv file
const DELIM = ",";
// placeholder xvalues
const timeVec = [];
// placeholder temperature data
const tempVec = [];

// Create charts:
chartIt();

async function chartIt() { 
  await getData();
  const CHART = document.getElementById("lineChart");
  console.log(CHART);
  let lineChart = new Chart(CHART, {
    type: 'line',
    data: data = {
      labels: timeVec,
        datasets: [{
          label: 'Jarvis Testset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: tempVec,
      }]
    }
  });

}

async function getData(){
    const response = await fetch('order.csv');
    const data =  await response.text();

    const rows = data.split('\n');
    const newRows = rows.slice(-NR_PLOT_ROWS );
    newRows.forEach(row =>{
      const columns = row.split(DELIM);
      const temp     = columns[1];
      const humidity = columns[2];
      const pressure = columns[3];
      const date     = columns[4];
      const time     = columns[5];
      timeVec.push(time);
      tempVec.push(temp);
      console.log(time, temp);
    });
}