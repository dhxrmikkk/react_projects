import React, { useEffect, useState } from 'react'

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [geoCity, setGeoCity] = useState('');
  const [geoCountryCode, setGeoCountryCode] = useState('');
  const [geoCityWeather, setGeoCityWeather] = useState('');
  const [geoCityCondition, setGeoCityCondition] = useState('')

  const [searchCity, setSearchCity] = useState('')
  const [searchCityTemp, setSearchCityTemp] = useState('')
  const [searchCityCountry, setSearchCityCountry] = useState('')
  const [searchCityHumidity, setSearchCityHumidity] = useState('')
  const [searchCityCondition, setSearchCityCondition] = useState('')
  const [searchCityWind, setSearchCityWind] = useState('')

  const [displayCity, setDisplayCity] = useState("");

  const maxLength = 20

  useEffect(() => {
    const getGeolocation = async () => {
      const response = await fetch(`https://ipapi.co/json/`);
      const data = await response.json();
      setGeoCity(data.city);
      setGeoCountryCode(data.country);
    };
    getGeolocation();
  }, []);


  useEffect(() => {
    if (geoCity) {
      const getGeoLocationWeather = async () => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${geoCity}&units=metric&appid=${import.meta.env.VITE_APP_API_ID}`)
        const data = await response.json()
        const temp = Math.floor(data.main.temp)
        const condition = data.weather[0].main

        setGeoCityWeather(temp)
        setGeoCityCondition(condition)

      }
      getGeoLocationWeather()
    }
  }, [geoCity]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const dateString = currentTime.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const searchCityData = async (searchCity) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${import.meta.env.VITE_APP_API_ID}`);
      const data = await response.json();

      if (response.status === 200) {
        const search_city_temp = Math.floor(data.main.temp);
        setSearchCityTemp(search_city_temp);

        const humidity = data.main.humidity;
        setSearchCityHumidity(humidity);

        const condition = data.weather[0].main;
        setSearchCityCondition(condition);

        const wind = data.wind.speed;
        setSearchCityWind(wind);

        setSearchCityCountry(data.sys.country);
        setDisplayCity(searchCity);
      } else {
        // If the city is not found
        setDisplayCity('');
        setSearchCityTemp('');
        setSearchCityHumidity('');
        setSearchCityCondition('');
        setSearchCityWind('');
        setSearchCityCountry('');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
      // Handle any other errors
      setDisplayCity('');
      setSearchCityTemp('');
      setSearchCityHumidity('');
      setSearchCityCondition('');
      setSearchCityWind('');
      setSearchCityCountry('');
    }

    setSearchCity('');
  };

  const getCityName = (e) => {
    if (e.key === "Enter") {
      searchCityData(searchCity)
    }
  };

  return (
    <>
      <main className='bg-[url(./assets/background1.jpg)] bg-cover bg-opacity-5 h-screen flex justify-center items-center'>
        <div className="px-4 sm:px-8 md:px-16 lg:px-16 xl:px-32 2xl:px-64 font-geist w-full">
          <div className='h-[40rem] items-center justify-center flex w-full'>
            <div className='w-full flex flex-col lg:flex-row h-full justify-center'>
              {/* <div className='w-2/4 h-full bg-[url(./assets/city.jpg)] text-white bg-cover p-4 flex flex-col justify-between'> */}
              <div className='lg:w-2/4 w-full h-full bg-white/55 text-black bg-cover p-4 flex flex-col justify-between '>
                <div className='flex flex-col items-end justify-start'>
                  <span className='text-3xl'>{
                    !geoCity ? ("--") : (geoCity)
                  }</span>
                  <div className='text-3xl uppercase'>{
                    !geoCountryCode ? ("--") : (geoCountryCode)
                  }</div>
                </div>
                <div className='flex items-center w-full'>
                  <div className='flex flex-col w-2/3'>
                    <span className='text-3xl mb-2'>{timeString}</span>
                    <div className='text-xl'>{dateString}</div>
                  </div>
                  <div className='w-1/3 h-full flex items-end'>
                    <span className='text-5xl'>{
                      !geoCityWeather ? ("--°") : (
                        <>
                          {`${geoCityWeather}°`}
                        </>
                      )
                    }<span className='text-3xl'>C</span></span>
                  </div>
                </div>
              </div>
              <div className='lg:w-1/3 w-full bg-black/55 p-4 text-white'>
                <div className='w-full flex justify-center py-5'>
                  {
                    geoCityCondition === "Clouds"
                      ?
                      (
                        <div className='flex flex-col items-center'>
                          <i className="fa-solid fa-cloud text-5xl mb-4"></i>
                          <span className='text-2xl'>{geoCityCondition}</span>
                        </div>
                      )
                      :
                      geoCityCondition === "Rain"
                        ?
                        (
                          <div className='flex flex-col items-center'>
                            <i className="fa-solid fa-cloud-rain text-5xl mb-4"></i>
                            <span className='text-2xl'>{geoCityCondition}</span>
                          </div>
                        )
                        :
                        geoCityCondition === "Snow"
                          ?
                          (
                            <div className='flex flex-col items-center'>
                              <i className="fa-regular fa-snowflake text-5xl mb-4"></i>
                              <span className='text-2xl'>{geoCityCondition}</span>
                            </div>
                          )
                          :
                          (
                            <div className='flex flex-col items-center'>
                              <i className="fa-solid fa-cloud text-5xl mb-4"></i>
                              <div className='text-2xl'>{geoCityCondition}</div>
                            </div>
                          )
                  }
                </div>
                <hr className='border-white/55' />
                <div className='my-10'>
                  <input
                    type="text"
                    className="bg-transparent p-2 rounded-none w-full border border-white/55 focus-visible:outline-none"
                    placeholder="Enter City Name"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    onKeyDown={getCityName}
                    maxLength={maxLength}
                  />
                  <span className='flex justify-end my-1 text-sm'>{searchCity.length}/{maxLength}</span>
                </div>
                <div className='flex justify-center flex-col items-center'>
                  {
                    displayCity
                      ?
                      (
                        <>
                          <span className='text-2xl mb-5'>
                            {
                              !displayCity
                                ? (
                                  "--"
                                )
                                :
                                (
                                  `${displayCity} , ${searchCityCountry}`
                                )
                            }
                          </span>
                          <div className='flex justify-between w-full items-center mb-2 py-2'>
                            <span>Temprature</span>
                            <span>
                              {
                                !searchCityTemp
                                  ? ("--")
                                  :
                                  (`${searchCityTemp}°C`)
                              }
                            </span>
                          </div>
                          <hr className='border-white/45 w-full' />
                          <div className='flex justify-between w-full items-center mb-2 py-2'>
                            <span>Humidity</span>
                            <span>
                              {
                                !searchCityHumidity
                                  ? ("--")
                                  :
                                  (`${searchCityHumidity} %`)
                              }
                            </span>
                          </div>
                          <hr className='border-white/45 w-full' />
                          <div className='flex justify-between w-full items-center mb-2 py-2'>
                            <span>Conditions</span>
                            <span>
                              {
                                !searchCityCondition
                                  ? ("--")
                                  :
                                  (`${searchCityCondition}`)
                              }
                            </span>
                          </div>
                          <hr className='border-white/45 w-full' />
                          <div className='flex justify-between w-full items-center mb-2 py-2'>
                            <span>Wind</span>
                            {/* searchCityWind */}
                            <span>
                              {
                                !searchCityWind
                                  ? ("--")
                                  :
                                  (`${searchCityWind} KM/H`)
                              }
                            </span>
                          </div>
                        </>
                      )
                      :
                      (
                        <div className='h-full justify-center items-center'>
                          <span>No Data Found</span>
                        </div>
                      )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App