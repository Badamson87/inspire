import WeatherController from "./components/weather/weather-controller.js";
import ImageController from "./components/image/image-controller.js"
import QuoteController from "./components/quote/quote-controller.js";
import TodoController from "./components/todo/todo-controller.js";
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      imageController: new ImageController(),
      quoteController: new QuoteController(),
      toDoController: new TodoController(),
    }
  }
}

window.app = new App()  