new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
	
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
          label: "Revenue",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#a7dc74"],
          data: [500,800,1000,1300,1800]
        }
      ]
    },
    options: {
      legend: { display: true },
      title: {
        display: false,
        text: 'Year Wise Revenue'
      }
    }
	
});

new Chart(document.getElementById("bar-chart-grouped"), {
    type: 'bar',
    data: {
      labels: ["2016", "2017", "2018", "2019", "2020"],
      datasets: [
        {
          label: "Boys",
          backgroundColor: "#3e95cd",
          data: [80,110,200,600,750]
        }, {
          label: "Girls",
          backgroundColor: "#8e5ea2",
          data: [90,120,190,550,700]
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'No. of Boys and Girls'
      }
    }
});