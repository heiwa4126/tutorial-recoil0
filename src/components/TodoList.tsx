import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState, todoListFilterState } from "../atom";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const todoList = useRecoilValue(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("select:", e.target.value);
    setFilter(e.target.value);
  };

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <select value={filter} onChange={handleChange}>
        <option value="すべて">すべて</option>
        <option value="完了">完了</option>
        <option value="未完了">未完了</option>
      </select>
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}

let id = 1;
function getId() {
  return id++;
}

export default TodoList;
