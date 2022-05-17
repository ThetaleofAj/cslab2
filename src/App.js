import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data,setData] = useState([]);
  const [info,setInfo] = useState({})

  useEffect(()=>{
    fetch("https://andyson3.pythonanywhere.com/api/home")
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
      const interval = setInterval(() => {
        window.location.reload()
      }, 60000);
  },[])

  const doThis =()=>{
    console.log(info.information)
  }
  
  return (
  <>
    <div className="area">
    <h1>Andyson Mupeta</h1>
      <p className="CurrentWeather">{info.information} at {info.timeStamp}</p>
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

export default App;
