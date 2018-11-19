

const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/brian/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {

	getTodos(draw) {
		todoApi.get('')
			.then((res) => {
				draw(res.data.data)
				todoList = res.data.data
			})
			.catch(logError)
	}

	addTodo(todo, callback) {
		todoApi.post('', todo)
			.then(function (res) {
				callback()
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId, getTodos) {
		var todo = todoList.find(function (element) {
			return element._id == todoId;
		});
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo(todoId, getTodos) {
		todoApi.delete(todoId)
			.then(function (res) {
				getTodos()
			})
			.catch(logError)
	}
}
