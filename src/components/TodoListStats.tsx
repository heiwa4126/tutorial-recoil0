import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../selector";

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum } =
    useRecoilValue(todoListStatsState);

  return useMemo(() => {
    console.log("TodoListStats rendered.");
    return (
      <ul>
        <li>Todoの登録数:{totalNum}</li>
        <li>完了の数:{totalCompletedNum}</li>
        <li>未完了の数:{totalUncompletedNum}</li>
      </ul>
    );
  }, [totalNum, totalCompletedNum, totalUncompletedNum]);
}

export default TodoListStats;
