import { useNavigate } from "react-router-dom";

const ErrorModal = () => {
  const navigate = useNavigate();

  const BackHandler = () => {
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-[514px] h-[135px] border border-gray-200 bg-white rounded-xl shadow-lg p-5 flex gap-4">
        <div>❗️</div>
        <div className="flex-1">
          <p className="text-red-600 font-semibold text-[15px]">
            Что-то пошло не так
          </p>
          <p className="text-red-500 text-[14px]">Тестовая ошибка!</p>

          <div className="flex gap-4 mt-4">
            <button
              className="px-4 py-2 text-red-600 text-[14px] font-medium rounded-xl border border-gray-300 bg-white hover:bg-gray-100 transition-colors duration-200 ease-in-out"
              onClick={BackHandler}
            >
              Назад
            </button>

            <button
              className="px-4 py-2 text-white bg-black text-[14px] font-medium rounded-xl hover:bg-gray-800 transition-colors duration-200 ease-in-out"
              onClick={BackHandler}
            >
              На главную
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
