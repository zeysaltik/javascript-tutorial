const textInputDOM = document.getElementById("todo-input")
const btnAddTodoDOM = document.getElementById("add-todo")
const todosDOM = document.querySelector("#todos")
const btnClearDOM = document.querySelector("#clear")

let todoArr = []

btnAddTodoDOM.addEventListener("click", function (e) {
    e.preventDefault()
    let id = todoArr.length + 1
    let title = textInputDOM.value
    const todo = new Todo(id, title)
    todoArr.push(todo)
    todoArr.reverse()
    UI.alert("Todo Eklendi!")
    UI.clearInput()
    UI.displayTodos()
})

class Todo {
    constructor(id, title) {
        this.id = id
        this.title = title
    }
}

class UI {

    static displayTodos() {
        let result = ""

        if (todoArr.length === 0) {
            todosDOM.innerHTML = "Liste Boş!"
        } else {
            todoArr.forEach((item) => {
                result += `
            <li class="flex justify-between border border-2 px-4 py-3 flex items-center justify-between font-bold">
                <span>${item.title}</span>
                <button class="text-red-400 remove" data-id="${item.id}">Sil</button>
            </li>
            `
            })
            todosDOM.innerHTML = result
        }
    }

    static clearInput() {
        textInputDOM.value = ""
    }

    static removeTodo() {
        todosDOM.addEventListener("click", function (e) {
            if (e.target.classList.contains("remove")) {
                e.target.parentElement.remove()
                let btnId = e.target.dataset.id
                UI.removeArrayTodo(btnId)
            }
        })
    }

    static removeArrayTodo(id) {
        todoArr = todoArr.forEach((item) => item.id !== +id )
        debugger;
        UI.displayTodos()
        UI.alert("Todo Silindi!")
    }

    static alert(text) {
        window.alert(text)
    }
}
window.addEventListener("DOMContentLoaded", function () {
    UI.removeTodo()
    UI.displayTodos()
})

//! old project
// textInputDOM.addEventListener("change", function (event) {
//     textInputValue = event.target.value
// })

// btnAddTodoDOM.addEventListener("click", addTodo)
// btnClearDOM.addEventListener("click", clearTodos)

// function addTodo(e) {
//     e.preventDefault()
//     todos.unshift({ id: todos.length + 1, todoTitle: textInputValue })
//     textInputDOM.value = ""
//     displayTodos()
// }

// function displayTodos() {
//     let result = ""

//     if (todos.length === 0) {
//         todosDOM.innerHTML = "Liste Boş!"
//     } else {
//         todos.forEach((item) => {
//             result += `
//     <li class="flex justify-between border border-2 px-4 py-3 flex items-center justify-between font-bold">
//         <span>${item.todoTitle}</span>
//         <button class="text-red-400" onclick="deleteTodo(${item.id})">Sil</button>
//     </li>
//     `
//         })
//         todosDOM.innerHTML = result
//     }
// }

// function deleteTodo(id) {
//     let deletedId
//     for (let index in todos) {
//         if (todos[index].id == id) {
//             deletedId = index
//         }
//     }
//     todos.splice(deletedId, 1)
//     displayTodos()
// }

// function clearTodos() {
//     todos.splice(0, todos.length)
//     displayTodos()
// }

// displayTodos()