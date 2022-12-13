import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selector";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
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
