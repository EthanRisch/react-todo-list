import { useRef } from "react";

import classes from "./TodoItem.module.css";

import Card from "../ui/Card";

import x from "./img/VectorX.svg";
import check from "./img/Vectorcheck.svg";
import hamburger from "./img/Vectoroptions.svg";

function TodoItem(props) {
  const titleInputRef = useRef();

  // TODO Fix this so that it works
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;

    props.onEditTitle(title, props.id, props.listKey);
  };

  function handleDelete() {
    props.handleDelete(props.id, props.listKey);
  }

  return (
    <Card>
      <section>
        <span className={classes.text}>
          {/*<h3>{props.title}</h3>*/}
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder={props.title} ref={titleInputRef} />
          </form>
          <button>
            <img src={hamburger} alt="" />
          </button>
        </span>
        <hr />
        <div className={classes.buttons}>
          <button>
            <img src={x} alt="" onClick={handleDelete} />
          </button>
          <button>
            <img src={check} alt="" />
          </button>
        </div>
      </section>
    </Card>
  );
}

export default TodoItem;
