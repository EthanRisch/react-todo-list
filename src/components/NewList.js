import { useRef } from "react";

import classes from "./NewList.module.css";

function NewList() {
  const titleInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: titleInputRef.current.value,
      description: "",
    };
  };

  return (
    <div>
      <form action="">
        <input
          className={classes.title}
          type="text"
          placeholder="Create New List..."
        />
      </form>
    </div>
  );
}

export default NewList;
