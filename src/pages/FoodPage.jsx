import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import { useSelector,useDispatch } from "react-redux";
import { add_to_cart } from "@/redux_toolkit/CardSlice";
import { useState } from "react";
function TastyPage() {
  const recipes = useLoaderData();
  const [alertMessage, setAlertMessage] = useState("");
  
  const dispatch=useDispatch();
  const {cart}=useSelector((state)=>state.cart)
  const price=5;
  console.log(cart)
  if (!recipes || recipes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }
 const handleClick=(name,price,id)=>{
      dispatch((add_to_cart({name:name,
        price:price,id:id
      })))
      setAlertMessage(`${name} added to the cart!`);
      setTimeout(() => setAlertMessage(""), 3000);
 }
  return (
    <div className="min-h-screen py-8 px-4">
        {alertMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {alertMessage}
        </div>
      )}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
        Foods
      </h1>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="rounded-lg p-4 "
            >
              {recipe.thumbnail_url && (
                <div className="w-full h-48 overflow-hidden rounded-md mb-3">
                  <img
                    src={recipe.thumbnail_url}
                    alt="Food Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center font-sans">
                {recipe.name}
              </h2>
              <p className="flex flex-col space-x-5 justify-center items-center">
              <span className="text-center">${price.toFixed(2)}</span>
                <button className="p-1 bg-blue-400 rounded-lg hover:bg-blue-900 hover:scale-125 duration-500 ease-in-out"
                onClick={()=>handleClick(recipe.name,price,recipe.id)}
                >
              
                  Add To Cart
                </button>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No Recipes Found</p>
      )}
    </div>
  );
}

export default TastyPage;
