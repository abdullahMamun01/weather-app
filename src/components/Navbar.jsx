import React, { useEffect, useState } from 'react'

export default function Navbar({ handleGeoLocationByCity }) {
    const [city, setCity] = useState('')
    const [value, setValue] = useState('')
    useEffect(() => {
        const getCityWeatherData = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}`)
    
            const weatherData = await response.json()
            if (!response.ok) {
                throw Error('data fetching faild')
            }
           
            const { coord } = weatherData
            handleGeoLocationByCity(coord?.lat, coord?.lon)
            console.log(weatherData)
        }
        if (city) {
            getCityWeatherData()
        }
    }, [city])

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log(formData.get('search'))
        setCity(formData.get('search'))
        setValue('')
    }

    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <a href="" className='text-sky-600 mx-5 text-2xl font-bold'>
                    Open weather Api
                </a>

                <div className="flex items-center gap-4 relative">
                    <form onSubmit={onSubmit}>
                        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                            <input value={value} onChange={(e) => setValue(e.target.value)} className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                                name="search" type="search" placeholder="Search Location" required />
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.6" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                    <path d="M21 21l-6 -6" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>
        </header>
    )
}
