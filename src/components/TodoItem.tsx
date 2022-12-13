import produce from "immer";
import { useRecoilState } from "recoil";
import { todoListState } from "../atom";
import Todo from "../types/Todo";

type Prop = {
  item: Todo;
};

function TodoItem({ item }: Prop) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItem = () => {
    console.log("delete", item.id);
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    setTodoList(
      produce(todoList, (draft) => {
        draft.splice(index, 1);
      })
    );
  };

  const toggleItemCompletion = () => {
    const index = todoList.findIndex((listItem) => listItem.id === item.id);
    setTodoList(
      produce(todoList, (draft) => {
        draft[index].isComplete = !draft[index].isComplete;
      })
    );
  };

  return (
    <div>
      <button onClick={toggleItemCompletion}>
        {item.isComplete ? "完" : "未"}
      </button>
      {item.title}
      <span onClick={deleteItem} style={{ cursor: "pointer" }}>
        X
      </span>
    </div>
  );
}

export default TodoItem;
