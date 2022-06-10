import classes from "./TodoItem.module.css";

import Card from "../ui/Card";

function TodoItem(props) {
  return (
    <Card>
      <section>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className={classes.buttons}>
          <button>Delete</button>
          <button>Mark Complete</button>
        </div>
      </section>
    </Card>
  );
}

export default TodoItem;
