import Todos from "./Todos";
import NewTodoCard from "./NewTodoCard";

function ListItem(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <Todos />
      <NewTodoCard />
    </div>
  );
}

export default ListItem;
