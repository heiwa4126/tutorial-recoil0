import Todo from "../types/Todo";

type Prop = {
  item: Todo;
};

function TodoItem({ item }: Prop) {
  return <div>{item.title}</div>;
}

export default TodoItem;
