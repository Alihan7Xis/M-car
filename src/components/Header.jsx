import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const Header = () => {
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.userName);
  console.log(user, "user from redux");

  return (
    <header className="w-full bg-white border border-gray-300 p-4 flex items-center justify-between">
      <h1 className="text-xl font-bold">M-кар</h1>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/errors")}
          className="px-4 py-2 border border-gray-300 bg-[#fdfefd] hover:bg-gray-200 rounded-xl transition"
        >
          Тестовая ошибка!
        </button>

        <p className="font-medium">{user?.name || ""}</p>

        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 border border-gray-300 bg-[#fdfefd] hover:bg-gray-200 rounded-xl transition"
        >
          Выйти
        </button>
      </div>

    </header>
  );
};

export default Header;
