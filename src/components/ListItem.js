import classes from "./ListItem.module.css";

import Todos from "./Todos";

import x from "./img/VectorX.svg";

function ListItem(props) {
  function handleDeleteList() {
    props.handleDeleteList(props.listKey);
  }

  return (
    <div>
      <section className={classes.titleBar}>
        <h2>{props.title}</h2>
        <button onClick={handleDeleteList}>
          <img src={x} />
        </button>
      </section>
      <Todos listKey={props.listKey} />
    </div>
  );
}

export default ListItem;
