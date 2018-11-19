import TodoService from "./todo-service.js";



var todoService = new TodoService
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	let list = ""
	todos.forEach(todo => {
		let checked = ""
		if (todo.completed) {
			checked = "checked"
		}
		list += `<a class="dropdown-item" href="#">
			<div class="form-check">
				<input id="${todo._id}" class="form-check-input todoCheckBox" type="checkbox" onchange="app.controllers.toDoController.toggleTodoStatus(this.value)" value="${todo._id}" ${checked}>
				<label class="form-check-label" for="${todo._id}">${todo.description}</label>
			</div>
			</a>	
			`
	})
	document.getElementById("todo").innerHTML = list
	document.getElementById("thingsToDo").innerText = "Open Projects:" + todos.length
}



export default class TodoController {
	constructor() {
		getTodos()
	}

	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault()
		var form = e.target
		let formData = new FormData(form)
		var todo = {
			description: formData.get('toDoText'),
			completed: false
		}
		todoService.addTodo(todo, getTodos)
	}





	toggleTodoStatus(todoId) {
		todoService.toggleTodoStatus(todoId, getTodos)
	}






	removeTodo() {
		let checkboxs = document.querySelectorAll(".todoCheckBox:checked")
		for (let index = 0; index < checkboxs.length; index++) {
			let todo = checkboxs[index];
			todoService.removeTodo(todo.value, getTodos)
			console.log(todo.value)
		}

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}



}
