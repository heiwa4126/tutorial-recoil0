import { selector } from "recoil";
import { todoListState } from "./atom";

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});
