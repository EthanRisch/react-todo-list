import { useState, useEffect } from "react";

import TodoItem from "./TodoItem";

import NewTodoCard from "./NewTodoCard";

function Todos() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);
  const [render, setRender] = useState(0);

  const firebaseLink = process.env.REACT_APP_FIREBASE_LINK;

  async function handleNewTodo(todo) {
    await fetch(firebaseLink + ".json", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {});
    setRender(render + 1);
  }

  async function handleDelete(id) {
    let newLink = `${firebaseLink}/${id}.json`;
    console.log(newLink);
    await fetch(newLink, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRender(render + 1);
  }

  console.log(`Todos have been reloaded`);

  useEffect(() => {
    setIsLoading(true);
    fetch(firebaseLink + ".json")
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
          handleDelete={handleDelete}
        />
      ))}
      <NewTodoCard handleNewTodo={handleNewTodo} />
    </section>
  );
}

export default Todos;
