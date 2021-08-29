//script for donut chart
var dch = document.getElementById("donutchart").getContext("2d");
var configdchart = {
  type: "doughnut",
  data: {
    labels: ["Applicant Subscriptions", "Recruiter Subscriptions"],
    datasets: [
      {
        label: "My First Dataset",
        data: [46256, 13200],
        backgroundColor: ["rgb(100, 200, 255)", "rgb(40, 100, 135)"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    legend: {
      position: "right",
    },
  },
  donut: {
    title: "$59,456",
  },
};
var dchart = new Chart(dch, configdchart);
