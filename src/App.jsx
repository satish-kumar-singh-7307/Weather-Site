import axios from 'axios'
import React, { useState } from 'react'
import Weather from './Component/Weather';

const App = () => {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")
  const searchLocation = (event)=>{ 
    if(event.key ==="Enter"){
    axios.get(url)
    .then((response)=>{
      setData(response.data)
      console.log(response.data);

  })
  setLocation("")
    } 
  }
   const API_KEY= "4dd42317572ae7b2ffb02111586b2fc9"
const url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
  return (
    <div className=' w-full h-screen text-center bg-slate-200 relative'>
      <div className='  text-center  '> 
      <h1 className=' pt-7 text-gray-500 text-[100px] font-semibold '>WEATHER WEBSITE</h1>
        <input type='text' className='w-[40vw] h-[3vw] m-10 rounded-3xl placeholder:text-gray-700 px-6  focus:outline-none ' placeholder='Enter Location'
        value={location}
        onChange={(event)=>setLocation(event.target.value)}
        onKeyDownCapture={searchLocation}
        />
      </div>
      <Weather weatherData={data} />
    </div>
  )
}

export default App