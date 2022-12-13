import { atom, selector, useRecoilValue } from "recoil";
import Todo from "../types/Todo";

const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [
    {
      id: 0,
      title: "メール送信",
      isComplete: false,
    },
  ],
});

const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});

function TodoList() {
  const todoList = useRecoilValue(todoListState);
  const totalNum = useRecoilValue(todoListStatsState);

  console.log(todoList);
  return (
    <>
      <h1>RecoilによるTodoアプリ</h1>
      <ul>
        <li>Todoの登録数:{totalNum}</li>
      </ul>
      {todoList.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default TodoList;
