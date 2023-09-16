import React, { useState } from "react";
import "./App.css";
import { TodoTable } from "./components/TodoTable";
import { NewTodoForm } from "./components/NewTodoForm";

export const App = () => {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
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

  const addTodo = (description: string, assigned: string) => {
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

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  };
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your ToDos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          <button
            className="btn btn-primary"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {showAddTodoForm ? "Close NewTodo" : "New Todo"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo}></NewTodoForm>}
        </div>
      </div>
    </div>
  );
};
