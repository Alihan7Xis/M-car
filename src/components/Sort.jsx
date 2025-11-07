import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { setSortType } from "./slices/sortSlice";
const Sort = () => {
  const dispatch = useDispatch();
  const sortType = useAppSelector((state) => state.sort.sortType);
  return (
    <div className="border border-gray-300 rounded-2xl w-full max-w-[1480px] mx-[20px] mt-6 bg-white shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Сортировать по цене</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-4">
          <label
            htmlFor="sort-none"
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <input
              type="radio"
              id="sort-none"
              checked={sortType === "nosorting"}
              onChange={() => dispatch(setSortType("nosorting"))}
              className="w-4 h-4 accent-black border-gray-300 rounded"
            />
            <span>Нет сортировки</span>
          </label>

          <label
            htmlFor="ascending"
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <input
              type="radio"
              id="ascending"
              checked={sortType === "ascending"}
              onChange={() => dispatch(setSortType("ascending"))}
              className="w-4 h-4 accent-black border-gray-300 rounded"
            />
            <span>Цена: по возрастанию</span>
          </label>

          <label
            htmlFor="descending"
            className="flex items-center space-x-2 cursor-pointer select-none"
          >
            <input
              type="radio"
              id="descending"
              checked={sortType === "descending"}
              onChange={() => dispatch(setSortType("descending"))}
              className="w-4 h-4 accent-black border-gray-300 rounded"
            />
            <span>Цена: по убыванию</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Sort;
