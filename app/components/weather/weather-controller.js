import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
let yourWeather = []
let temp = 0


export default class WeatherController {

	constructor() {
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			temp = weather.main.temp

			// converts kelvin to fahrenheit
			temp = (temp - 273.15) * 9 / 5 + 32
			document.getElementById("weather").innerText = Math.floor(temp).toString() + "\u00B0"
		})
	}
}
