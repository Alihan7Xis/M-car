import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCars } from "./slices/sortSlice";
import Header from "./Header";
import Footer from "./Footer";

const EditCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(
          `https://f3d72df74c48504c.mokky.dev/cars/${id}`
        );
        const data = await response.json();

        setValue("mark", data.mark);
        setValue("price", data.price);
        setValue("year", data.year);
        setValue("country", data.country);
      } catch (error) {
        console.log("Ошибка загрузки данных:", error.message);
      }
    };

    fetchCar();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const updatedCar = {
      mark: data.mark,
      price: data.price,
      year: data.year,
      country: data.country,
    };

    await fetch(`https://f3d72df74c48504c.mokky.dev/cars/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCar),
    });

    const updatedCars = await fetch(
      "https://f3d72df74c48504c.mokky.dev/cars"
    ).then((res) => res.json());

    dispatch(setCars(updatedCars));

    navigate("/home");
  };

  return (
    <>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[520px] mx-auto mt-[100px] border border-gray-300 bg-[#ffffff] rounded-2xl shadow-xl px-7 py-7 mb-10"
      >
        <div className="flex flex-col">
          <label htmlFor="mark" className="block font-[16px] mb-1">
            Название машины
          </label>
          <input
            {...register("mark", { required: "Имя машины обязательно" })}
            type="text"
            id="mark"
            placeholder="Ауди"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
          />

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

          <button
            type="submit"
            className="w-full mt-5 py-2 px-6 bg-[#171717] border border-gray-200 outline-none text-white font-[16px] rounded-lg transition duration-200 hover:bg-gray-800 shadow-md"
          >
            Сохранить изменения
          </button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default EditCar;
