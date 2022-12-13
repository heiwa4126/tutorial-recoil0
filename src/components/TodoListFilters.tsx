import { useMemo } from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../atom";

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("select:", e.target.value);
    setFilter(e.target.value);
  };

  return useMemo(() => {
    console.log("TodoListFilters rendered.");
    return (
      <select value={filter} onChange={handleChange}>
        <option value="すべて">すべて</option>
        <option value="完了">完了</option>
        <option value="未完了">未完了</option>
      </select>
    );
  }, [filter]);
}

export default TodoListFilters;
