import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import CardList from "../CardList";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <CardList />

      <Footer />

      <Outlet />
    </>
  );
};

export default HomePage;
