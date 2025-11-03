import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Register from "./components/RegisterForm";
import ErrorModal from "./components/ErrorModal";
import { store } from "./components/store/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  { index: true, path: "/", element: <Register /> },
  { path: "/home", element: <HomePage /> },
  { path: "errors", element: <ErrorModal /> },
]);
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
