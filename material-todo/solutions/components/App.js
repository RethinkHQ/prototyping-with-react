import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import { Todo } from "./Todo";
import { Input } from "./Input";
import { Empty } from "./Empty";
import { Remove } from "./Remove";

/**
 * The root component for the todo application
 */
const App = () => {
  /**
   * State for the "Add a task" input
   */
  const [inputValue, setInputValue] = useState();

  /**
   * State for the list of todos.
   * Retrieved from local storage.
   */
  const [todos, setTodos] = useState(() => {
    const todos = localStorage.getItem("todos");

    if (todos) {
      return JSON.parse(todos);
    }

    return [];
  });

  /**
   * An effect that saves the current todos to
   * local storage when changed.
   */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Paper className="max-w-md mx-auto mt-8" elevation={3}>
      <Input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter" && inputValue.trim().length > 0) {
            setTodos([{ label: inputValue, completed: false }, ...todos]);
            setInputValue("");
          }
        }}
      />
      {todos.length === 0 && <Empty />}
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={`${todo}-${index}`}
            completed={todo.completed}
            text={todo.label}
            onChange={() => {
              const newTodos = todos.slice();

              newTodos.splice(index, 1, {
                ...todo,
                completed: !todo.completed
              });

              setTodos(newTodos);
            }}
          />
        ))}
      </div>
      <Remove
        onClick={() => {
          if (todos) {
            setTodos(todos.filter(todo => !todo.completed));
          }
        }}
      />
    </Paper>
  );
};

export default App;
