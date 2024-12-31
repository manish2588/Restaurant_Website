import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import FoodPage from "./pages/FoodPage";
import { foodLoader } from "./components/Loader";
import TodaySpecial from "./pages/TodaySpecial";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";

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
        },
        {
          path:"special",
          element:<TodaySpecial/>
        },
        {
          path:"cart",
          element:<CartPage/>,
        },
        {
          path:"contact",
          element:<ContactPage/>
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
