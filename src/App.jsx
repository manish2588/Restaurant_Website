import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import "./App.css";

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>
    }
  ])
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
