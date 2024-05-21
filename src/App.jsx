import { useEffect, useState } from "react"
import Weather from "./components/Weather"
import Navbar from "./components/Navbar"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [geolocation, setGeolocation] = useState({
    lat: '',
    lon: ''
  })

  const handleGeoLocationByCity = (lat,lon) => {
    setGeolocation({lat,lon})
  }

  //fetching api for weather data
  useEffect(() => {
    setLoading(true)
    const getdata = async (lat, lon) => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`)
        const data = await response.json()
        if(!response.ok){
          throw Error('data fetching faild')
        }

        const updateWeatherData = {
          cloudyPercentage: data.clouds.all,
          temperature: data.main.temp,
          maxTemperature: data.main.temp_max,
          minTemperature: data.main.temp_min,
          feelsLike: data.main.feels_like,
          cityName: data.name,
          description: data.weather[0].description,
          wind: data.wind.speed,
          cloudState: data.base,
          humidity: data?.main?.humidity,
          climate: data.weather[0].main

        }
        setWeatherData(updateWeatherData)

        setLoading(false)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
        setError(null)
      }

    }
    console.log(import.meta.env.VITE_API_KEY)
    if (geolocation.lat && geolocation.lon) {

      getdata(geolocation.lat, geolocation.lon)
    }
    console.log('loading.........')

  }, [geolocation])

  //for get current location of lat and long
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const p = position.coords;

      setGeolocation({
        lat: p.latitude,
        lon: p.longitude
      })
    })
  }, [])

  console.log(weatherData)
  return (
    <div>
      <Navbar handleGeoLocationByCity={handleGeoLocationByCity}/>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          {error && error.message}
          {loading && <span className="text-green-500 my-5">Loading....</span>}
        </div>
        {weatherData && <Weather weatherData={weatherData} />}
      </div>
    </div>
  )
}

export default App
