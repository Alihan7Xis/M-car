import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks";
import { deleted, setCars } from "./slices/sortSlice";
import Sort from "./Sort";
import { useNavigate } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import Navbar from "./Navbar";

const CardList = () => {
  const dispatch = useDispatch();
  const cars = useAppSelector((state) => state.sort.cars);
  const sortType = useAppSelector((state) => state.sort.sortType);
  const navigate = useNavigate();

  // Sort
  const [filteredMarks, setFilteredMarks] = useState([]);

  const parsePrice = (price) => {
    if (!price) return 0;
    return Number(price.toString().replace(/\D/g, ""));
  };

  const displayedCars = [...cars]
    .filter((car) => {
      if (filteredMarks.length === 0) return true;
      return filteredMarks.includes(car.mark);
    })
    .sort((a, b) => {
      if (sortType === "descending")
        return parsePrice(a.price) - parsePrice(b.price);
      if (sortType === "ascending")
        return parsePrice(b.price) - parsePrice(a.price);
      return 0;
    });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  // Sort...
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://f3d72df74c48504c.mokky.dev/cars");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Ошибка запроса");
        }
        dispatch(setCars(data));
      } catch (error) {
        console.error("Error fetching:", error.message);
      }
    };

    fetchCars();
  }, [dispatch]);

  const handleOpenModal = () => navigate("/addCard");

  const handleDelete = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleConfirm = async () => {
    if (!selectedCar) return;

    try {
      const response = await fetch(
        `https://f3d72df74c48504c.mokky.dev/cars/${selectedCar.id}`,
        { method: "DELETE" }
      );

      if (!response.ok) throw new Error("Ошибка при удалении DELETE");

      dispatch(deleted({ id: selectedCar.id }));
      setIsModalOpen(false);
      setSelectedCar(null);
    } catch (error) {
      console.log("Ошибка при удалении DELETE", error.message);
    }
  };

  const handleEdit = (car) => navigate(`/edit/${car.id}`);

  return (
    <div className="mb-6">
      <Navbar onFilterChange={setFilteredMarks} />

      <Sort />
      <div className="mt-6">
        <div className="flex justify-between items-center max-w-[1500px] mx-[20px] mb-4">
          <button
            className="bg-[#121715] text-white font-sm rounded-[8px] py-1.5 px-3 cursor-pointer hover:bg-gray-800 transition"
            onClick={() => setFilteredMarks([])}
          >
            Очистить все фильтры
          </button>
          <button
            className="bg-[#121715] text-white font-sm rounded-[8px] py-1.5 px-3 hover:bg-gray-800 transition"
            onClick={handleOpenModal}
          >
            Создать
          </button>
        </div>

        <div className="overflow-x-auto mt-4 border border-gray-300 rounded-2xl w-full max-w-[1480px] mx-[20px] p-4">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="border-t hover:bg-gray-50 transition">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Модель</th>
                <th className="px-4 py-2 text-left">Цена</th>
                <th className="px-4 py-2 text-left">Год</th>
                <th className="px-4 py-2 text-left">Страна</th>
                <th className="px-4 py-2 text-right">Действия</th>
              </tr>
            </thead>

            <tbody>
              {displayedCars.map((car, index) => (
                <tr
                  key={car.id}
                  className="border-t border-gray-300 hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{car.mark}</td>
                  <td className="px-4 py-2">{car.price} долларов</td>
                  <td className="px-4 py-2">{car.year}</td>
                  <td className="px-4 py-2">{car.country}</td>
                  <td className="px-4 py-2 flex gap-3">
                    <button
                      onClick={() => handleEdit(car)}
                      className="flex items-center justify-center p-3 border border-gray-300 rounded-sm cursor-pointer hover:bg-blue-100 transition"
                    >
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMpQQ9cPHSVseNuBh-gj83XgIPt42xE4f0DG-U7aPn-KQO-HJT"
                        alt="icon"
                        className="w-5 h-4"
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(car)}
                      className="flex items-center justify-center cursor-pointer border border-gray-300 rounded-sm"
                    >
                      <img
                        src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLEUgal7GMx2YESakj4SUfTZjdk-Qtm4ajyoLZsi5F3xcmWq3D"
                        alt="trash icon"
                        className="w-9 h-7"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleClose}
        onConfirm={handleConfirm}
        carName={selectedCar?.mark}
      />
    </div>
  );
};

export default CardList;
