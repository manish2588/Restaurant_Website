import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_cart,
  inc_quantity,
  dec_quantity,
  quantity_zero,
} from "@/redux_toolkit/CardSlice";
import LoadingSpinner from "../components/LoadingSpinner";

function OrderPage() {
  const [recipes, setRecipes] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [openCardId, setOpenCardId] = useState(null); // Track which card is open
  const dispatch = useDispatch();
  const { orderQuantity } = useSelector((state) => state.cart);
  const price = 5;

  const handleQuantity = (id) => {
    setOpenCardId(openCardId === id ? null : id); // Toggle open/close for specific card
  };

  useEffect(() => {
    axios
      .get("https://tasty.p.rapidapi.com/recipes/list", {
        params: {
          from: "40",
          size: "20",
        },
        headers: {
          "X-RapidAPI-Key":
            "20d4d1bec9msh69cc707d26a6f2ep12529djsndef7467236a3",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      })
      .then((response) => {
        setRecipes(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      });
  }, []);

  const handleClick = (name, price, id, quantity) => {
    dispatch(add_to_cart({ name, price, id, quantity }));
    setAlertMessage(`${name} added to the cart!`);
    setTimeout(() => setAlertMessage(""), 3000);
    setOpenCardId(!openCardId);
    dispatch(quantity_zero())
  };
  const handleIncrement = () => {
    dispatch(inc_quantity());
  };
  const handleDecrement = () => {
    dispatch(dec_quantity());
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div className="p-8 bg-orange-400" id="order">
      {alertMessage && (
        <div className="fixed z-50 top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {alertMessage}
        </div>
      )}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
        Order Now
      </h1>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="rounded-lg p-4">
              {recipe.thumbnail_url && (
                <div className="w-full h-48 overflow-hidden rounded-md mb-3">
                  <img
                    src={recipe.thumbnail_url}
                    alt="Food Image"
                    className="w-full h-full object-cover hover:scale-110 duration-1000 ease-in-out"
                  />
                </div>
              )}
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center font-sans truncate">
                {recipe.name}
              </h2>

              <p className="flex space-x-5 justify-center items-center">
                <button onClick={() => handleQuantity(recipe.id)}>Order</button>
                <span className="text-center">${price.toFixed(2)}</span>
              </p>

              <div>
                {openCardId === recipe.id && (
                  <div>
                    <div className="mt-4 flex justify-center items-center space-x-4">
                      <button
                        className="p-2 bg-red-500 text-white rounded-full"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{orderQuantity}</span>
                      <button
                        className="p-2 bg-green-500 text-white rounded-full"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                      <button
                        className="p-1 bg-blue-400 rounded-lg hover:bg-blue-900"
                        onClick={() =>
                          handleClick(
                            recipe.name,
                            price,
                            recipe.id,
                            orderQuantity
                          )
                        }
                      >
                        Add
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No Recipes Found</p>
      )}
    </div>
  );
}

export default OrderPage;
