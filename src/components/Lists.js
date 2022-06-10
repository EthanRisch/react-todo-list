import classes from "./Lists.module.css";

import ListItem from "./ListItem";

function Lists() {
  const DUMMY_DATA = ["My List 1", "My List 2"];

  return (
    <section className={classes.lists}>
      {DUMMY_DATA.map((list) => (
        <ListItem title={list} />
      ))}
    </section>
  );
}

export default Lists;
