import classes from "./TodoItem.module.css";

import Card from "../ui/Card";

import x from "./img/VectorX.svg";
import check from "./img/Vectorcheck.svg";
import hamburger from "./img/Vectoroptions.svg";

function TodoItem(props) {
  return (
    <Card>
      <section>
        <span className={classes.text}>
          <h3>{props.title}</h3>
          <button>
            <img src={hamburger} alt="" />
          </button>
        </span>
        <hr />
        <div className={classes.buttons}>
          <button>
            <img src={x} alt="" />
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
