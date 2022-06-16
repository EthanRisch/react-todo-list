import classes from "./NewTodoCard.module.css";

import { useRef } from "react";

import Card from "../ui/Card";

function NewTodoCard(props) {
  const titleInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = {
      title: titleInputRef.current.value,
      description: "",
    };
    props.handleNewTodo(todo);
  };

  return (
    <Card>
      <section>
        <span className={classes.text}>
          {/*<h3>{props.title}</h3>*/}
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Create New Todo..."
              ref={titleInputRef}
            />
          </form>
        </span>
        <hr />
      </section>
    </Card>
  );
}

export default NewTodoCard;
