import WeatherService from "./weather-service.js";

var weatherService = new WeatherService()
let yourWeather = []
let temp = 0


export default class WeatherController {

	constructor() {
		//this will fire off get weather right away
		this.getWeather()
	}
	getWeather() {
		weatherService.getWeather(weather => {
			console.log(weather);
			temp = weather.main.temp
			temp = (temp - 273.15) * 9 / 5 + 32
			//What can you do with this weather object?
			document.getElementById("weather").innerText = Math.floor(temp).toString()
		})
	}
}
