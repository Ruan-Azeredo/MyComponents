import { useEffect, useState } from "react"
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart, Line } from 'react-chartjs-2'

export default function GraficoLinhaDuplo() {

    // const [areaTableChartCtx, setAreaTableChartCtx] = useState()
    const sales2022 = [12, 19, 10, 26, 15, 17, 10, 27, 0] 
    const sales2021 = [17, 10, 26, 15, 17, 10, 27, 12, 21] 

    const [active, setActive] = useState(['active', null, sales2021])

    const selectYear = (year) => {
        if (year == 2021) {
            setActive(['active', null, sales2021])
        } else {
            setActive([null, 'active', sales2022])
        }
    }

    var data = {
                labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S'],
                datasets: [
                    {
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderColor: "#8f44fd",
                        label: 'Number',
                        fill: true,
                        data: active[2]
                    }
                ]
            }
                    
    const options =  {
                        plugins: {
                            legend: {
                            display: false
                            }
                        },
                        elements: {
                            point: {
                                radius: 8,
                                hoverRadius: 8,
                                borderWidth: 0
                            }
                        },
                        scales: {
                            x: {
                                display: false
                            },
                            y: {
                                suggestedMax: 40,
                                suggestedMin: 0,
                                grid: {
                                    display: true,
                                    drawBorder: true,
                                    drawOnChartArea: true,
                                    drawTicks: true,
                                    color: "rgba(255, 255, 255, 0.08)",
                                    borderColor: "trasnparent",
                                    borderDash: [5, 5],
                                    borderDashOffset: 2,
                                    tickColor: "transparent"
                                }
                            }
                        },
                        tension: 0.3
                    }

    return (
        
        <div className="background">
            <div className="card">
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Homenaje&family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
                <header className="card-header">
                    <div>
                        <h2>Sales</h2>
                        <h3>Select by Year</h3>
                    </div>
                    <div>
                        <button
                            className={`${active[0]}`}
                            type="button"
                            onClick={() => selectYear(2021)}
                        >2021</button>
                        <button
                            className={`${active[1]}`}
                            type="button"
                            onClick={() => selectYear(2022)}
                        >2022</button>
                    </div>
                </header>
                <Line data={data} options={options} width={400} height={220} />
            </div>
            <style jsx>{`
                .background{
                    background: #8f44fd;
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                .card{
                    background: #1b1b1b;
                    width: 300px;
                    padding: 30px;
                    border-radius: 10px;
                    display: grid;
                    align-self: center;
                }
                .card-header{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 8px
                }
                .card header h2{
                    color: #f9f9f9;
                    font-size: 24px;
                }
                .card header h3{
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 16px;
                }
                .card button{
                    background: transparent;
                    border: 0;
                    color: #f9f9f9;
                    width: 50px;
                    border-radius: 5px;
                    padding: 4px 10px;
                    cursor: pointer
                }
                .card button.active{
                    background: #8f44fd;
                    font-family: inherit
                }
            `}</style>
        </div>
    )
}