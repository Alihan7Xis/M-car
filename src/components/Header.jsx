import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../hooks";
import { clearUser } from "./slices/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <header className="w-full bg-white border border-gray-300 p-4 flex items-center justify-between sticky top-0 z-10">
      <h1 className="text-xl font-bold">M-кар</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/errors")}
          className="px-4 py-2 border border-gray-300 bg-[#fdfefd] hover:bg-gray-200 rounded-xl transition"
        >
          Тестовая ошибка!
        </button>
        <p className="font-medium">{user?.name || "Гость"}</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 border border-gray-300 bg-[#fdfefd] hover:bg-gray-200 rounded-xl transition"
        >
          Выйти
        </button>
      </div>
    </header>
  );
};

export default Header;
