import TodoService from "./todo-service.js";



var todoService = new TodoService
let list = ""
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	todos.forEach(todo => {
		list += `<a class="dropdown-item" href="#">
			<div class="form-check">
				<input class="form-check-input todoCheckBox" type="checkbox" value="${todo._id}" id="">
				<label class="form-check-label" for="defaultCheck1">${todo.description}</label>
			</div>
			</a>	
			`
	})
	document.getElementById("todo").innerHTML = list
	//DONT FORGET TO LOOP
}



export default class TodoController {
	constructor() {
		getTodos()
	}

	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
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
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
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
