import produce from "immer";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../atom";

function TodoItemCreator() {
  const [title, setTitle] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldList) => {
      return produce(oldList, (draft) => {
        draft.push({
          id: getId(),
          title: title,
          isComplete: false,
        });
      });
    });
    setTitle("");
  };

  return (
    <div style={{ margin: "1em 0" }}>
      <input type="text" value={title} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;

let id = 1;
function getId() {
  return id++;
}
