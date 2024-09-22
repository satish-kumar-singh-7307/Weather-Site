import React from 'react'



const Weather = ({weatherData}) => {
  return (
    <div>
      {weatherData.weather ? (
        <div className='w-[500px] h-[250px] bg-white rounded-3xl  m-auto relative shadow-lg px-6 top-[10%]' >
          <div className='flex justify-between w-full'>
            <div className='flex  w-1/2  my-4 mx-auto justify-between text-center items-center '>
              <div className='flex justify-between flex-col items-start  mt-4 ml-9 ' >
                        <div className='ml-3 '>
                          <p className='text-3xl'>{weatherData.name},
                           {weatherData.sys.country} </p>
                           <p className='text-sm'>{weatherData.weather[0].description}</p>
                        </div>
                        <div>
                          <h1 className=' ml-5 mt-3 text-4xl font-semibold'>{weatherData.main.temp}°C</h1>
                        </div>
                        <div className='ml-5 mt-4'>
                        <h1 className='font-semibold'>Pressure</h1>
                        <p>{weatherData.main.pressure}atm</p>
                        </div>
               </div>
            </div>
            <div className='w-1/2'>
              <img className='h-[100px] w-[100px] ml-[50px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR04-kUFXciBs0KJTCjs2VBVkhFr3aXQdpfvQ&s'/>
              
              <h1 className='font-semibold'>Wind Speed</h1>
              <p>{weatherData.wind.speed} km</p>
              <h1 className='font-semibold'>Feels Like  </h1>
              <p>{weatherData.main.feels_like}°C</p>
            </div>
          </div>
        </div>
    ): null}

    </div>
  )
}

export default Weather