import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import GaugeChart from 'react-gauge-chart'
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


function Dashboard(){
  const [data,setData] = useState([]);
  const [info,setInfo] = useState({})

  useEffect(()=>{
    fetch("https://andyson4.pythonanywhere.com/api/home")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
          setInfo(result[result.length -1])
        },
        (error) => {
        }
      )
     setInterval(() => {
      fetch("https://andyson4.pythonanywhere.com/api/home")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
          setInfo(result[result.length -1])
        },
        (error) => {
        }
      )
      }, 30000);
      
  },[])
  
  const chartInfo = {
    labels: data.map((data)=>data.timeStamp),
    datasets: [
      {
        label: 'temperature',
        data: data.map((data)=>data.temperature),
        fill: false,
        
        borderColor: 'red',
      },
      {
        label: 'humidity',
        data: data.map((data)=>data.humidity),
        fill: false,
        borderColor: 'blue',
      }
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    elements:{
      line:{
        tension:0.5
      }
    }
  };



  
  return (
  <>
  <div className="Container1">
    <h1 className="sectionTitle">Temperature</h1>
  <GaugeChart id="gauge-chart1" percent={info.temperature/100}
  formatTextValue={value=>value + '°C'}
  />
   <h1 className="sectionTitle">Humidity</h1>
  <GaugeChart id="gauge-chart1"  percent={info.humidity/100}
  />
  <div>
  <h1 className="sectionTitle">Temperature and Humidity against Time graph</h1>
    <Line data={chartInfo} options={options}/>
  </div>
  </div>
    <div className="area">
    </div>
    <div className="area2">
    {data.map(item=>(
  <li key={item.id}>
    {item.information} {item.timeStamp}
  </li>
    ))}
  
    </div>
  </>
  );
}

export default Dashboard;
