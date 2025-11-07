import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/pages/HomePage";
import Register from "./components/RegisterForm";
import ErrorModal from "./components/ErrorModal";
import AddCardModal from "./components/AddCardModal";
import EditCar from "./components/EditCar";
import { Provider } from "react-redux";
import { store } from "./components/store/store";

const router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { index: true, path: "/", element: <Register /> },
      { path: "/home", element: <HomePage /> },
      { path: "errors", element: <ErrorModal /> },
      { path: "addCard", element: <AddCardModal /> },
      { path: "/edit/:id", element: <EditCar /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
