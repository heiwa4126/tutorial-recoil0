import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selector";
import TodoItem from "./TodoItem";
import TodoItemCreator from "./TodoItemCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";
import TodoReset from "./TodoReset";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <TodoReset />
      <TodoListFilters />
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
