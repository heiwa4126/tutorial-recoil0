import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import TodoListStats from "./TodoListStats";
import TodoItemCreator from "./TodoItemCreator";

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

let id = 1;
function getId() {
  return id++;
}

export default TodoList;
