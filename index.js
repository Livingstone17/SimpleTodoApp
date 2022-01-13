var addTodoBtn = document.querySelector(".addTodo");
var userInput = document.getElementById("todoText");
var todoList = document.querySelector("ul");
var todoItem = document.getElementsByTagName("li");
var enterBtn = document.getElementById('')
var todos = [];
// function inputLength(){
// 	return input.value.length;
// } 

// function listLength(){
// 	return item.length;
// }

 createTodoList=()=> {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(userInput.value)); //makes text from input field the li text
	var todo = todoList.appendChild(li); //adds li to ul
	todos.push(todoList.value);
    userInput.value = ""; //Reset text input field

	// method to mark todo as completed
 markComplete=()=> {
		li.classList.toggle("completed");
	}
	li.addEventListener("click",markComplete);

    // method to add delete button to todo item
	var deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);

    //method to delete a todo
	 deleteTodo=()=>{
		li.classList.add("delete")
	}
	deleteBtn.addEventListener("click", deleteTodo);
}

// method to add a todo to the list of todos
 addTodoItem=()=>{
	if (userInput.value != '') { 
        createTodoList();
	}
}

addTodoWithEnterKey=(event)=> {
	if (userInput.value != '' && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
        createTodoList();
       
	} 
}


addTodoBtn.addEventListener("click",addTodoItem);

userInput.addEventListener("keypress", addTodoWithEnterKey);


	

// method to record completed items

