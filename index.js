const todo = new Todo()
const todoInput = document.querySelector("#getTodoInput")
const todoListContainer = document.querySelector("#todoListContainer")

const emptyNode = (parent) => {
  while (parent?.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const renderList = () => {
  emptyNode(todoListContainer)
  todo.getTodos().map((todo) => {
    // create elements
    const LI = document.createElement("li")
    const DIV = document.createElement("div")
    const INPUT = document.createElement("input")
    const SPAN = document.createElement("span")

    // append
    DIV.classList.add("inputBox")
    INPUT.type = "text"
    INPUT.value = todo.value
    INPUT.setAttribute("disabled", "")
    INPUT.setAttribute("id", `input${todo.id}`)
    INPUT.setAttribute("onKeyUp", "onInputEdit(event)")
    SPAN.innerText = "X"
    SPAN.setAttribute("id", todo?.id)
    SPAN.setAttribute("onclick", "handleDeleteTodo(event)")

    //append
    DIV.appendChild(INPUT)
    DIV.appendChild(SPAN)
    LI.appendChild(DIV)
    todoListContainer.appendChild(LI)
  })
}

function addTodo(event) {
  event.preventDefault()
  const inputValue = todoInput.value
  // if input is empty
  if (!!!inputValue) {
    return alert("Please enter a valid todo")
  } else {
    // use the todo class's addTodo method
    todo.addTodo(inputValue)
  }
  console.log("todo", todo)
  renderList()
  todoInput.value = ""
}

function handleDeleteTodo(event) {
  console.log("handleDeleteTodo")
  if (event?.target?.id) {
    console.log("event?.target?.id", event?.target?.id)
    todo.deleteTodos(event?.target?.id)
    renderList()
  }
}

function makeInputEditable(event) {
  const id = event?.target?.id
  if (!id) return null
  const inputBox = document.querySelector("#" + id)
  inputBox.removeAttribute("disabled")
}

function onInputEdit(event) {
  // safety checks
  if (event?.key != "Enter" || !event?.target?.id) return
  // logic
  todo.updateTodo(event?.target?.id.slice(5), event?.target?.value)
  renderList()
}
