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
  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your ToDos</div>
        <div className="card-body">
          <TodoTable todos={todos}></TodoTable>
        </div>
      </div>
    </div>
  );
}

export default App;
