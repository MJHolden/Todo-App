import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoName, setTodoName] = useState("");

  // refactoring

  function addTodoClickHandler(e) {
    e.preventDefault();

    setTodoList([...todoList, todoName]);
    setTodoName("");
  }

  function deleteTodoClickHandler(item) {
    setTodoList(todoList.filter((todo, index) => index !== item));
  }

  function clearAllHandlerClick() {
    setTodoList([]);
  }

  return (
    <>
      <h1>To Do List</h1>
      <input
        placeholder="Enter to do here"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        id="todo-input"
      ></input>
      <button
        onClick={addTodoClickHandler}
        type="submit"
        id="todo-btn"
        disabled={todoName === ""}
      >
        +
      </button>
      <div>{todoList.length === 0 && <p>Add first To Do</p>}</div>
      <div id="todo-list">
        <ul>
          {todoList.map((todo, index) => (
            <li key={todo} id="todo">
              {todo}{" "}
              <button
                onClick={() => deleteTodoClickHandler(index)}
                id="delete-btn"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {todoList.length !== 0 && todoList.length !== 1 && (
          <button onClick={clearAllHandlerClick} id="clear-btn">
            Clear All
          </button>
        )}
      </div>
    </>
  );
}

export default App;
