
import axios from 'axios';
import { useState } from 'react';
import './App.css';
import Cards from "./Cards.jsx";
//import axios from 'axios';
function App() {
  const[city,setCity]=useState("");
  const[info,setInfo]=useState({
    description:"",
    temp:0,
    temp_max:0,
    temp_min:0,
    humidity:0,
    sunrise:0,
    sunset:0,
    country:"",
  });
  const handle=(e)=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=810279d2d3445af76b8b4d6b4351f9a9`)
    .then((response)=>{
      console.log(response.data);
      setInfo({
        description:response.data.weather[0].description,
        temp:response.data.main.temp,
        temp_max:response.data.main.temp_max,
        temp_min:response.data.main.temp_min,
        humidity:response.data.main.humidity,
        sunrise:response.data.sys.sunrise,
        sunset:response.data.sys.sunset,
        country:response.data.sys.country,
      })
    })
    .catch((error)=>{
      console.log("error");
    })

  }
  return (
    <div className="container">
      <div className='header'>
        <h1>Weather App Using Reactjs</h1>
        <input type="text" className='input1'placeholder='Add city name' value={city} onChange={(e)=>{
          setCity(e.target.value);
        }} />
        <button className='btn ' type='submit' onClick={handle}>get temp</button>
      </div>
      <div className='content'>
        <Cards text={info}/>
      </div>
    </div>
  );
}

export default App;
/*const[info,setInfo]=useState({
    description:"",
    temp:0,
    temp_max:0,
    temp_min:0,
    humidity:0,
    sunrise:0,
    sunset:0,
    country:"",
  });*/