import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Statistics.css';
import './style.css';

function Statistics() {
    const [selectedName, setSelectedName] = useState('');
    const [counter, setCounter] = useState(0);
    const [weeklyData, setWeeklyData] = useState({
        monday: [0, 0, 0],
        tuesday: [0, 0, 0],
        wednesday: [0, 0, 0],
        thursday: [0, 0, 0],
        friday: [0, 0, 0]
    });

    useEffect(() => {
        const name = localStorage.getItem('selectedName');
        const data = localStorage.getItem('selectedData');
        if (name && data) {
            const parsedData = JSON.parse(data);
            setSelectedName(name);
            setCounter(parsedData.counter);
            setWeeklyData({
                monday: parsedData.monday_data || [0, 0, 0],
                tuesday: parsedData.tuesday_data || [0, 0, 0],
                wednesday: parsedData.wednesday_data || [0, 0, 0],
                thursday: parsedData.thursday_data || [0, 0, 0],
                friday: parsedData.friday_data || [0, 0, 0]
            });
        }
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: 'Min',
                data: [
                    weeklyData.monday[0],
                    weeklyData.tuesday[0],
                    weeklyData.wednesday[0],
                    weeklyData.thursday[0],
                    weeklyData.friday[0]
                ],
                backgroundColor: 'rgb(255,232,214)'
            },
            {
                label: 'Average',
                data: [
                    weeklyData.monday[1],
                    weeklyData.tuesday[1],
                    weeklyData.wednesday[1],
                    weeklyData.thursday[1],
                    weeklyData.friday[1]
                ],
                backgroundColor: 'rgb(32,163,158)'
            },
            {
                label: 'Max',
                data: [
                    weeklyData.monday[2],
                    weeklyData.tuesday[2],
                    weeklyData.wednesday[2],
                    weeklyData.thursday[2],
                    weeklyData.friday[2]
                ],
                backgroundColor: 'rgb(255,186,73)'
            }
        ]
    };

    const averages = {
        monday: weeklyData.monday[1] || 0,
        tuesday: weeklyData.tuesday[1] || 0,
        wednesday: weeklyData.wednesday[1] || 0,
        thursday: weeklyData.thursday[1] || 0,
        friday: weeklyData.friday[1] || 0
    };

    return (
        <div className="group-container">
           
            <div className="banner-background">
                <h1>Statistics Page</h1>
                <p>Selected Name: {selectedName}</p>
                <p>Counter: {counter}</p>
            </div>
            <br></br>
            <div className="content">
                <table className="averages-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(averages).map(([day, avg]) => (
                            <tr key={day}>
                                <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                                <td>{avg}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="chart-container">
                    <Bar data={data} />
                </div>
            </div>
        </div>
    );
}

export default Statistics;
