//Your ImageService is a global class what can you do here to instantiate it?
import ImageService from "./image-service.js"

let _imageService = new ImageService()


function drawImage(arr) {
  let i = Math.floor(Math.random() * arr.length)
  // console.log(arr[i])
  document.getElementById("body").style.backgroundImage = `url('${arr[i].url}')`;
}




export default class ImageController {
  constructor() {
    // console.log("image controller is here")
    _imageService.getImage(drawImage)
  }
}

