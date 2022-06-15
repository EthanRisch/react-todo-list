import Todos from "./Todos";

function ListItem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Todos />
    </div>
  );
}

export default ListItem;
