import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addCar } from "./slices/sortSlice";
import { useAppDispatch } from "../hooks";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const AddCardModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoadingBtn, setLoadingBtn] = useState("Добавить машину");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newCar = {
      mark: data.nameCar,
      price: data.price,
      year: data.year,
      country: data.country,
    };

    try {
      const response = await fetch("https://f3d72df74c48504c.mokky.dev/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCar),
      });

      if (!response.ok) throw new Error("Не удалось добавить машину");

      const savedCar = await response.json();

      dispatch(addCar(savedCar));

      navigate("/home");
      alert("Машина создана")
    } catch (error) {
      console.error("Ошибка добавления:", error.message);
    }
  };
  
  const loadingBtn = () => {
    setLoadingBtn("Сохраняем...")
  }

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[520px] mx-auto mt-[100px] border border-gray-300 bg-[#ffffff] rounded-2xl shadow-xl px-7 py-7 mb-10"
      >
        <div className="flex flex-col">
          <label htmlFor="nameCar" className="block font-[16px] mb-1">
            Название машины
          </label>
          <input
            {...register("nameCar", { required: "Имя машины обязательно" })}
            type="text"
            id="nameCar"
            placeholder="Ауди"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          {errors.nameCar && (
            <p className="text-red-500 text-xs mt-1">
              {errors.nameCar.message}
            </p>
          )}

          <label
            htmlFor="price"
            className="block text-sm mt-4 font-[16px] mb-1"
          >
            Цена
          </label>
          <input
            {...register("price", { required: "Введите цену" })}
            type="text"
            id="price"
            placeholder="450 долларов"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price.message}</p>
          )}

          <label htmlFor="year" className="block text-sm mt-4 font-[16px] mb-1">
            Год выпуска
          </label>
          <input
            {...register("year", { required: "Введите год выпуска" })}
            type="text"
            id="year"
            placeholder="2019"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          {errors.year && (
            <p className="text-red-500 text-xs mt-1">{errors.year.message}</p>
          )}

          <label
            htmlFor="country"
            className="block text-sm mt-4 font-[16px] mb-1"
          >
            Страна
          </label>
          <input
            {...register("country", { required: "Введите страну" })}
            type="text"
            id="country"
            placeholder="Германия"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />
          {errors.country && (
            <p className="text-red-500 text-xs mt-1">
              {errors.country.message}
            </p>
          )}

          <button
            type="submit"
            onClick={loadingBtn}
            className="w-full mt-5 py-2 px-6 bg-[#171717] border border-gray-200 outline-none text-white font-[16px] rounded-lg transition duration-200 hover:bg-gray-800 shadow-md"
          >
            {isLoadingBtn}
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default AddCardModal;
