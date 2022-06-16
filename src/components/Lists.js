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

  return (
    <div className={classes.lists}>
      {DUMMY_DATA.map((list) => (
        <ListItem title={list.title} key={list.id} />
      ))}
      <NewList />
    </div>
  );
}

export default Lists;
