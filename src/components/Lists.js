import classes from "./Lists.module.css";

import ListItem from "./ListItem";

function Lists() {
  const DUMMY_DATA = [
    {
      title: "Go shopping",
      id: 0,
    },
    {
      title: "Study for math",
      id: 1,
    },
  ];

  return (
    <section className={classes.lists}>
      {DUMMY_DATA.map((list) => (
        <ListItem title={list.title} key={list.id} />
      ))}
    </section>
  );
}

export default Lists;
