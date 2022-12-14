import { useMemo } from "react";
import { useResetRecoilState } from "recoil";
import { todoListState } from "../atom";

function TodoReset() {
  const resetList = useResetRecoilState(todoListState);
  return useMemo(
    () => (
      <div>
        <button onClick={resetList}>reset</button>
      </div>
    ),
    []
  );
}

export default TodoReset;
