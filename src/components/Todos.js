import TodoItem from "./TodoItem";

function Todos() {
  const DUMMY_DATA = [
    {
      title: "Go shopping",
      description: "Apples, Oranges, Eggs",
    },
    {
      title: "Study for math",
      description: "Study for linear algebra.",
    },
  ];

  return (
    <section>
      {DUMMY_DATA.map((item) => (
        <TodoItem title={item.title} description={item.description} />
      ))}
    </section>
  );
}

export default Todos;
