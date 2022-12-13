import { useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
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
