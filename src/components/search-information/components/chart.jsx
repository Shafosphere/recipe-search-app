import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);
export default function TasteChart({ name, value }) {
    const chartData = {
        labels: [name],
        datasets: [
            {
                data: [
                    value,
                    100 - value,
                ],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                ],
                circumference: 180,
                rotation: 270,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'right',
        },
    };

    return (
        <div>
            <Doughnut data={chartData} options={chartOptions} />
        </div>
    );
};


