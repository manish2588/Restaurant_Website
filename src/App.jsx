import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import FoodPage from "./pages/FoodPage";
import { foodLoader } from "./components/Loader";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"about",
          element:<AboutPage/>
        },
        {
          path:"menu",
          element:<FoodPage/>,
          loader:foodLoader
        }
      ]
    }
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
