import { useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default TodoList;
