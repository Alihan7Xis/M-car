import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setName } from "./slices/userSlice";
import { useAppDispatch } from "../hooks";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const userDataString = JSON.stringify(userData);
    localStorage.setItem("userData", userDataString);

    dispatch(setName({ name: data.name, email: data.email }));
    navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[520px] mx-auto mt-[100px] border border-gray-300
    bg-[#ffffff] rounded-2xl shadow-xl px-7 py-7"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-black">Регистрация</h1>
        <p className="text-gray-600 mt-1 mb-4">
          Заполните форму для создания нового аккаунта
        </p>

        <div>
          <label htmlFor="name" className="block font-[16px] mb-1">
            Полное имя:
          </label>
          <input
            {...register("name", { required: "Имя обязательно" })}
            type="text"
            id="name"
            placeholder="Введите полное имя"
            required
            className="
          w-full px-4 py-2
          border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}

          <label
            htmlFor="email"
            className="block text-sm mt-4 font-[16px] mb-1"
          >
            Почта:
          </label>
          <input
            {...register("email", {
              required: "Введите email",
              pattern: { value: /\S+@\S+\.\S+/, message: "Неверный email" },
            })}
            type="email"
            id="email"
            placeholder="example@email.com"
            required
            className="
          w-full px-4 py-2
          border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}

          <label
            htmlFor="password"
            className="block text-sm mt-4 font-[16px] mb-1"
          >
            Пароль:
          </label>
          <input
            {...register("password", {
              required: "Введите пароль",
              minLength: { value: 6, message: "Минимум 6 символов" },
            })}
            type="password"
            id="password"
            placeholder="Введите пароль"
            required
            className=" w-full px-4 py-2 border border-gray-300 rounded-lg active:border-gray-700"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="
        w-full mt-5 py-2 px-6 bg-[#171717] border border-gray-200 outline-none text-white 
        font-[16px] rounded-lg transition duration-200 
        hover:bg-gray-800 shadow-md"
          >
            Зарегистрироваться
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
