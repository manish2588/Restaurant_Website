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
import { motion } from "framer-motion";
function OrderPage() {
  const [recipes, setRecipes] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [openCardId, setOpenCardId] = useState(null); 
  const dispatch = useDispatch();
  const { orderQuantity } = useSelector((state) => state.cart);
  const price = 5;

  const handleQuantity = (id) => {
    setOpenCardId(openCardId === id ? null : id); 
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
            "08be0cdb05msh0e37c122c21ff29p142befjsn2ed7119bbe26",
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
    dispatch(quantity_zero());
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
                <motion.button
                  onClick={() => handleQuantity(recipe.id)}
                  className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg px-4 py-1  hover:bg-teal-700 font-semibold font-sans"
                  whileHover={{
                    scale: 1.2,
                    textShadow: '0px 0px 16px rgb(255,255,255)',
                    boxShadow: '0px 0px 16px rgb(255,255,255)',
                    transition: { duration: 1, type: 'spring', stiffness: 500 }
                  }}
                >
                  Order
                </motion.button>
                <span className="text-center">${price.toFixed(2)}</span>
              </p>

              <div>
                {openCardId === recipe.id && (
                  <div>
                    <div className="mt-4 flex justify-center items-center space-x-4">
                      <motion.button
                        className="p-2 bg-red-500 text-white rounded-full"
                        onClick={handleDecrement}
                        whileHover={{
                          scale: 1.2,
                          textShadow: '0px 0px 16px rgb(255,255,255)',
                          boxShadow: '0px 0px 16px rgb(255,255,255)',
                          transition: { duration: 1, type: 'spring', stiffness: 500 }
                        }}
                      >
                        -
                      </motion.button>
                      <span className="text-lg font-bold">{orderQuantity}</span>
                      <motion.button
                        className="p-2 bg-green-500 text-white rounded-full"
                        onClick={handleIncrement}
                        whileHover={{
                          scale: 1.2,
                          textShadow: '0px 0px 16px rgb(255,255,255)',
                          boxShadow: '0px 0px 16px rgb(255,255,255)',
                          transition: { duration: 1, type: 'spring', stiffness: 500 }
                        }}
                      >
                        +
                      </motion.button>
                      <motion.button
                        className="px-4 py-1 rounded-lg bg-teal-600"
                        onClick={() =>
                          handleClick(
                            recipe.name,
                            price,
                            recipe.id,
                            orderQuantity
                          )
                        }
                        whileHover={{
                          scale: 1.2,
                          textShadow: '0px 0px 16px rgb(255,255,255)',
                          boxShadow: '0px 0px 16px rgb(255,255,255)',
                          transition: { duration: 1, type: 'spring', stiffness: 500 }
                        }}
                      >
                        Add
                      </motion.button>
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
