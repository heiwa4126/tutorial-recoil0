import { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { todoListState } from "../atom";
import TodoListStats from "./TodoListStats";

function TodoList() {
  const [title, setTitle] = useState("");
  //const todoList = useRecoilValue(todoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title,
        isComplete: false,
      },
    ]);
    setTitle("");
  };

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <TodoListStats />
      <div style={{ margin: "1em 0" }}>
        <input type="text" value={title} onChange={handleChange} />
        <button onClick={addItem}>Add</button>
      </div>
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
