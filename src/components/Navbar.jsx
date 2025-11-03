// import { useAppDispatch } from "../hooks";

const MarkCars = [
  { id: crypto.randomUUID(), mark: "Lexus" },
  { id: crypto.randomUUID(), mark: "Hyundai" },
  { id: crypto.randomUUID(), mark: "Ford" },
  { id: crypto.randomUUID(), mark: "Nissan" },
  { id: crypto.randomUUID(), mark: "Volkswagen" },
  { id: crypto.randomUUID(), mark: "BMW" },
  { id: crypto.randomUUID(), mark: "Honda" },
  { id: crypto.randomUUID(), mark: "Mercedes-Benz" },
  { id: crypto.randomUUID(), mark: "Toyota" },
];

const Navbar = () => {
  // const dispatch = useAppDispatch();

  return (
    <nav>
      <div className="">
        <h1>Car Brands</h1>
        <div>
          {MarkCars.map((marka) => (
            <label key={marka.id} htmlFor={marka.id}>
              <input
                type="checkbox"
                id={marka.id}
                // checked={()=> dispatch()}
                // onChange={() => dispatch()}
              />
              {marka.mark}
            </label>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
