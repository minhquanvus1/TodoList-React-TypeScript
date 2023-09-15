import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: "Feed puppy", rowAssigned: "User 1" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User 2" },
    { rowNumber: 3, rowDescription: "make dinner", rowAssigned: "User 1" },
    {
      rowNumber: 4,
      rowDescription: "Charge phone battery",
      rowAssigned: "User 1",
    },
  ];

  const addTodo = () => {
    if (todos.length > 0) {
      const newToDo = {
        rowNumber: todos[todos.length - 1].rowNumber + 1,
        rowDescription: "New Todo",
        rowAssigned: "User 3",
      };
      todos.push(newToDo);
      console.log("Todo List: ", todos);
    }
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
        </div>
      </div>
    </div>
  );
}

export default App;
