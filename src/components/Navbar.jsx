import { useState } from "react";

const MarkCars = [
  { id: 1, mark: "Лексус" },
  { id: 2, mark: "Форд" },
  { id: 3, mark: "Хёндай" },
  { id: 4, mark: "Ниссан" },
  { id: 5, mark: "Фольксваген" },
  { id: 6, mark: "BMW" },
  { id: 7, mark: "Хонда" },
  { id: 8, mark: "Мерседес-Бенц" },
  { id: 9, mark: "Тойота" },
];

const Navbar = ({ onFilterChange }) => {
  const [selectedMarks, setSelectedMarks] = useState([]);

  const handleChange = (mark) => {
    let newSelected;
    if (selectedMarks.includes(mark)) {
      newSelected = selectedMarks.filter((m) => m !== mark);
    } else {
      newSelected = [...selectedMarks, mark];
    }
    setSelectedMarks(newSelected);
    onFilterChange(newSelected);
  };

  return (
    <nav className="border border-gray-300 rounded-2xl w-full max-w-[1480px] mx-[18px] mt-6 bg-white shadow-sm">
      <div className="p-6">
        <h1 className="text-lg font-semibold mb-6">Марки автомобилей</h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-4">
          {MarkCars.map((marka) => (
            <label
              key={marka.id}
              className="flex items-center space-x-2 cursor-pointer select-none"
            >
              <input
                type="checkbox"
                checked={selectedMarks.includes(marka.mark)}
                onChange={() => handleChange(marka.mark)}
                className="w-4 h-4 accent-black border-gray-300 rounded"
              />
              <span>{marka.mark}</span>
            </label>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
