import { useState, useEffect } from "react";

import TodoItem from "./TodoItem";

import NewTodoCard from "./NewTodoCard";

function Todos() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);
  const [render, setRender] = useState(0);

  const firebaseLink = "";

  async function handleNewTodo(todo) {
    await fetch(firebaseLink, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRender(render + 1);
  }

  console.log(`Todos have been reloaded`);

  useEffect(() => {
    setIsLoading(true);
    fetch(firebaseLink)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const todos = [];

        for (const key in data) {
          const todo = {
            id: key,
            ...data[key],
          };
          todos.push(todo);
        }
        setLoadedTodos(todos);
        setIsLoading(false);
      });
  }, [render]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      {loadedTodos.map((item) => (
        <TodoItem
          title={item.title}
          description={item.description}
          id={item.id}
          key={item.id}
        />
      ))}
      <NewTodoCard handleNewTodo={handleNewTodo} />
    </section>
  );
}

export default Todos;
