// eslint-disable-next-line react/prop-types
export default function Weather({weatherData}) {
    const temp = Math.floor(weatherData?.temperature - 273)
    const minTemp = Math.floor(weatherData?.minTemperature - 273)
    const maxTemp = Math.floor(weatherData?.maxTemperature - 273)
    
    console.log(weatherData?.climate)

return (


    <section className="">
			<div className="container">
				<div
					className="grid bg-black/1 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
					<div className="grid md:grid-cols-2 gap-10 md:gap-6">
						<div className="md:col-span-2">
							<div className="flex items-center justify-end space-x-6">
								<button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
									<span>Add to Favourite</span>
									
								</button>
								
							</div>
						</div>
						<div>
							<div className="max-md:flex items-center justify-between md:-mt-10 mr-3">
								{/* <img src="./assets/cloud.svg" alt="cloud" /> */}
                                <h1 className="text-gray-300">{weatherData?.climate}</h1>
								<div className="max-md:flex items-center max-md:space-x-4">
									<h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{temp}°</h1>
									<div className="flex items-center space-x-4 md:mb-4">
										
										<h2 className="text-2xl lg:text-[30px]">{weatherData?.cityName}</h2>
									</div>
								</div>
							</div>
							<p className="text-sm lg:text-lg">{new Date().toDateString()}</p>
						</div>
						<div>
							<p className="text-sm lg:text-lg font-bold uppercase mb-8">{weatherData?.description}</p>
							<ul className="space-y-6 lg:space-y-6">
								<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Temp max</span>
									<div className="inline-flex space-x-4">
										<p>{maxTemp}°</p>
										
									</div>
								</li>
								<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Temp min</span>
									<div className="inline-flex space-x-4">
										<p>{minTemp}°</p>
								
									</div>
								</li>
								<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Humadity</span>
									<div className="inline-flex space-x-4">
										<p>{weatherData?.humidity}%</p>
								
									</div>
								</li>
								<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Cloudy</span>
									<div className="inline-flex space-x-4">
										<p>{weatherData?.cloudyPercentage}%</p>
								
									</div>
								</li>
								<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
									<span>Wind</span>
									<div className="inline-flex space-x-4">
										<p>{weatherData?.wind}km/h</p>
								
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				
			</div>
		</section>
  )
}
