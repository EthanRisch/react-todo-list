import { useEffect, useState } from "react";

import classes from "./Lists.module.css";

import ListItem from "./ListItem";
import NewList from "./NewList";

function Lists() {
  const DUMMY_DATA = [
    {
      title: "Go shopping",
      id: 0,
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedLists, setLoadedLists] = useState([]);
  const [render, setRender] = useState(0);

  const firebaseLink = process.env.REACT_APP_FIREBASE_LINK;

  async function handleNewList(list) {
    await fetch(firebaseLink + ".json", {
      method: "POST",
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {});
    setRender(render + 1);
  }

  async function handleDeleteList(id) {
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
        const lists = [];

        for (const key in data) {
          const list = {
            id: key,
            ...data[key],
          };
          lists.push(list);
        }
        setLoadedLists(lists);
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
    <div className={classes.lists}>
      {loadedLists.map((list) => (
        // how do i get the id, again?
        <ListItem title={list.title} key={list.id} listKey={list.id} />
      ))}
      <NewList handleNewList={handleNewList} />
    </div>
  );
}

export default Lists;
