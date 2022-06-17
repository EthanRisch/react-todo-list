import { useRef } from "react";

import classes from "./NewList.module.css";

function NewList(props) {
  const titleInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const list = {
      title: titleInputRef.current.value,
    };
    console.log(`new list submit: ${e}`);
    props.handleNewList(list);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          className={classes.title}
          type="text"
          placeholder="Create New List..."
          ref={titleInputRef}
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default NewList;
