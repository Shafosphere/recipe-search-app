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
                    'rgb(228, 127, 11)',
                    'rgb(104, 100, 96)',
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

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx } = chart;

            ctx.save();
            ctx.font = 'bolder 15px sans-serif';
            ctx.fillStyle = 'red';
            ctx.textAlign = 'center'
            ctx.fillText(forrmated(), chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
    function forrmated() {
        return (Math.round(chartData.datasets[0].data[0]) + '%')
    }
    

    return (
        <div>
            <Doughnut
                data={chartData}
                options={chartOptions}
                plugins={[textCenter]}
                height="80"
                width="100"
            />
        </div>
    );
};


