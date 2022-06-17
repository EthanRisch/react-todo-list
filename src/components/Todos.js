import { useState, useEffect } from "react";

import TodoItem from "./TodoItem";

import NewTodoCard from "./NewTodoCard";

function Todos(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTodos, setLoadedTodos] = useState([]);
  const [render, setRender] = useState(0);

  const firebaseLink = process.env.REACT_APP_FIREBASE_LINK;

  async function handleNewTodo(todo, listKey) {
    await fetch(`${firebaseLink}/${listKey}/todos.json`, {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {});
    setRender(render + 1);
  }

  async function handleDelete(id, listKey) {
    let newLink = `${firebaseLink}/${listKey}/todos/${id}.json`;
    console.log(newLink);
    await fetch(newLink, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRender(render + 1);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(`${firebaseLink}/${props.listKey}/todos.json`)
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
          console.log(`${JSON.stringify(todos)}`);
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
          listKey={props.listKey}
          handleDelete={handleDelete}
        />
      ))}
      <NewTodoCard handleNewTodo={handleNewTodo} listKey={props.listKey} />
    </section>
  );
}

export default Todos;
