const url = '//bcw-getter.herokuapp.com/?url=';
const url2 = 'http://www.splashbase.co/api/v1/images/search?query=mountains'
const apiUrl = url + encodeURIComponent(url2);


const imgApi = axios.create({
	baseURL: apiUrl,
	timeout: 3000
});

let imgArr = []

export default class ImageService {
	constructor() {
	}
	getImage(drawImage) {
		// ^^^^^^^ How do you call this function?
		imgApi.get('')
			.then(res => {
				console.log(res)
				imgArr = res.data.images
				console.log(imgArr)
				drawImage(imgArr)
			})
	}
}

