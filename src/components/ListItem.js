import Todos from "./Todos";

function ListItem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Todos listKey={props.listKey} />
    </div>
  );
}

export default ListItem;
