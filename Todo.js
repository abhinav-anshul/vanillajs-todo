class Todo {
  constructor() {
    this.todos = []
  }

  addTodo(value) {
    this.todos.push({
      id: parseInt(Math.random() * 1000).toString(),
      value: value,
    })
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo?.id !== id)
  }

  updateTodo(idToUpdate, valueToUpdate) {
    this.todos = this?.todos?.map((todo) => {
      if (todo?.id === idToUpdate) return { id: idToUpdate, value: valueToUpdate }
      return todo
    })
  }

  getTodos() {
    return this.todos
  }

  isEmpty() {
    return this?.todos?.length === 0
  }

  deleteTodos(id) {
    this.todos = this.todos.filter((todo) => todo.id != id)
  }
}
