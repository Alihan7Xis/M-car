import { Outlet } from "react-router-dom";
import Header from "../Header";
import Navbar from "../Navbar";


const HomePage = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Navbar />
    </>
  );
};

export default HomePage;
