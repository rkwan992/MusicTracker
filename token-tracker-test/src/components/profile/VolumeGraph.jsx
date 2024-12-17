import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const VolumeGraph = ({ user }) => {
  const data = {
    labels: ['12am', '3am', '6am', '9am', '12pm', '3pm', '6pm', '9pm'],
    datasets: [
      {
        label: 'Average Volume',
        data: user.averageVolume,
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Average Volume Throughout the Day',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Volume (%)',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 col-span-full">
      <h2 className="text-2xl font-semibold mb-4">Volume Trends</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default VolumeGraph;

