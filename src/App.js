import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User 1" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2" },
    { rowNumber: 3, rowDescription: "make dinner", rowAssigned: "User 1" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User 1",
    },
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newToDo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos((todos) => [...todos, newToDo]);
    console.log("Todo List: ", todos);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your ToDos</div>
        <div className="card-body">
          <TodoTable todos={todos}></TodoTable>
          <button className="btn btn-primary" onClick={addTodo}>
            Add new Todo
          </button>
          <NewTodoForm addTodo={addTodo}></NewTodoForm>
        </div>
      </div>
    </div>
  );
}

export default App;
