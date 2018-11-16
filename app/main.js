import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js"
// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageControler: new ImageController(),
    }
  }
}

window.app = new App()  