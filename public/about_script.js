new Chart(document.getElementById("behaviorPie1"), {
    type: 'pie',
    data: {
      labels: ["Staring at Fridge", "Other"],
      datasets: [{
        data: [42, 58],
        backgroundColor: ["#FF6384", "#DDDDDD"]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Stare at Fridge (42%)",
          font: { size: 16 }
        }
      }
    }
  });

  new Chart(document.getElementById("behaviorPie2"), {
    type: 'pie',
    data: {
      labels: ["Staring at Cupboard", "Other"],
      datasets: [{
        data: [48, 52],
        backgroundColor: ["#36A2EB", "#DDDDDD"]
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Stare at Cupboard (48%)",
          font: { size: 16 }
        }
      }
    }
  });

    //Time in a Day
    new Chart(document.getElementById("timeBarDay"), {
    type: 'bar',
    data: {
      labels: ["Daily Decision Time"],
      datasets: [
        {
          label: "Time Deciding (43 min)",
          data: [43],
          backgroundColor: "#FFCE56"
        },
        {
          label: "Other Time (1397 min)",
          data: [1397],
          backgroundColor: "#CCCCCC"
        }
      ]
    },
    options: {
      indexAxis: 'y',
      plugins: {
        title: {
          display: true,
          text: "Time Spent Deciding Meals (Daily)"
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} min`
          }
        }
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          max: 1440,
          title: {
            display: true,
            text: "Minutes in a Day"
          }
        },
        y: {
          stacked: true
        }
      }
    }
  });