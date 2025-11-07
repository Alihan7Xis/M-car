import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../hooks";
import { setUser } from "./slices/userSlice";

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://2e743bbf305016f4.mokky.dev/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok)
        throw new Error(`${response.status} ${response.statusText}`);

      const result = await response.json();
      console.log("✅ Регистрация успешна:", result);

      dispatch(setUser({ name: result.name, email: result.email }));
      reset();
      navigate("/home");
    } catch (error) {
      console.error("❌ Ошибка регистрации:", error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[520px] mx-auto mt-[100px] border border-gray-300 bg-white rounded-2xl shadow-xl px-7 py-7"
    >
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold text-black">Регистрация</h1>
        <p className="text-gray-600 mt-1 mb-4">
          Заполните форму для создания нового аккаунта
        </p>

        <label htmlFor="name" className="block font-[16px] mb-1">
          Полное имя:
        </label>
        <input
          {...register("name", { required: "Имя обязательно" })}
          type="text"
          id="name"
          placeholder="Введите полное имя"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}

        <label htmlFor="email" className="block text-sm mt-4 font-[16px] mb-1">
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}

        <button
          type="submit"
          className="w-full mt-5 py-2 px-6 bg-[#171717] text-white font-[16px] rounded-lg hover:bg-gray-800 transition-shadow shadow-md"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
