import React, { useEffect } from 'react'
import { Chart } from "chart.js/auto"

const GraficoBarrasTwoColors = () => {

    useEffect(() => {
        const areaTableChartCtx = document.getElementById("areaTableChart").getContext("2d")
        const data1 = [17, 10, 26, 15, 17, 10, 27, 12, 21]
        const data2 = [12, 19, 10, 26, 15, 17, 10, 27, 0]

        let delayed;
        const unicodeValueMap = {
            0: '\u{1D7EC}',
            1: '\u{1D7ED}',
            2: '\u{1D7EE}',
            3: '\u{1D7EF}',
            4: '\u{1D7F0}',
            5: '\u{1D7F1}',
            6: '\u{1D7F2}',
            7: '\u{1D7F3}',
            8: '\u{1D7F4}',
            9: '\u{1D7F5}'
        }
        
        const areaTableChart = new Chart(areaTableChartCtx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        backgroundColor: '#8f44fd',
                        borderColor: 'rgb(255, 255, 255, 0.08)',
                        label: 'This year',
                        fill: true,
                        data: data1,
                        borderRadius: 10,
                        borderSkipped: false,
                        barThickness: 12,
                    },
                    {
                        backgroundColor: '#d1d1d1',
                        borderColor: 'rgb(255, 255, 255, 0.08)',
                        label: 'Last year',
                        fill: true,
                        data: data2,
                        borderRadius: 10,
                        borderSkipped: false,
                        barThickness: 12,
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                    labels: {
                        fontColor: "white",
                    },
                    display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(255, 255, 255)',
                        usePointStyle: true,
                        borderColor: 'rgba(0, 0, 0, 0.1)',
                        borderWidth: 2,
                        boxPadding: 8,
                        boxWidth: 10,
                        boxHeight: 10,
                        callbacks: {
                            title: () => null,
                            label: (item) => {
                                let boldValue = "";
                                [...item.formattedValue].forEach((char) => {
                                  if (char in unicodeValueMap) {
                                    boldValue += unicodeValueMap[char];
                                  } else {
                                    boldValue += char;
                                  }
                                });
                                return `${item.dataset.label}: ${boldValue}`
                            }
                        },
                        padding: 12,
                        bodyColor: 'rgba(0, 0, 0)',
                        caretSize: 0
                    },
                },
                animation: {
                    onComplete: () => {
                      delayed = true;
                    },
                    delay: (context) => {
                      let delay = 0;
                      if (context.type === 'data' && context.mode === 'default' && !delayed) {
                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                      }
                      return delay;
                    },
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false,
                            
                        }
                    },
                    y: {
                        display: false
                    }
                }
            },
        })
        return function cleanup() {
            areaTableChart.destroy();
        };
    })

  return (
      <div className='background'>
          <div className='card'>
              <h2>UserGrowth</h2>
              <h3>Year on year comparison</h3>
              <canvas id="areaTableChart" width="400" height="220"></canvas>
          </div>
          <style jsx>{`
            .background{
                background: #d1d1d1;
                height: 100vh;
                width: 100%;
                display: flex;
                justify-content: center;
            }

            .card{
                background: #ffffff;
                width: 400px;
                padding: 30px;
                border-radius: 10px;
                display: grid;
                align-self: center;
            }

            .card h2{
                font-size: 24px;
                font-weight: 600
            }

            .card h3{
                color: rgba(0, 0, 0, 0.5);
                font-size: 16px;
                font-weight: 500
            }

            @media (max-width: 700px){
                .card{
                    width: 350px
                }
            }
            `}</style>
      </div>
  )
}

export default GraficoBarrasTwoColors