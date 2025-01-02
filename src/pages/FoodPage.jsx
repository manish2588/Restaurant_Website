import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add_to_cart } from "@/redux_toolkit/CardSlice";
import LoadingSpinner from "../components/LoadingSpinner";

function TastyPage() {
  const [recipes, setRecipes] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state to manage loading spinner

  const dispatch = useDispatch();

  const price = 5; // Static price for now

  // Fetching data directly with axios
  useEffect(() => {
    axios
      .get("https://tasty.p.rapidapi.com/recipes/list", {
        params: {
          from: "0", // Starting index
          size: "20", // Number of items to fetch
        },
        headers: {
          "X-RapidAPI-Key":
            "20d4d1bec9msh69cc707d26a6f2ep12529djsndef7467236a3",
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      })
      .then((response) => {
        setRecipes(response.data.results); // Set recipes data to state
        setLoading(false); // Stop loading
      })
      .catch((error) => {
        console.error("Error fetching recipes:", error);
        setLoading(false); // Stop loading even if error occurs
      });
  }, []);

  // Handle add to cart click
  const handleClick = (name, price, id) => {
    dispatch(add_to_cart({ name, price, id }));
    setAlertMessage(`${name} added to the cart!`);
    setTimeout(() => setAlertMessage(""), 3000);
  };

  // Show loading spinner while fetching
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
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center font-sans">
                {recipe.name}
              </h2>
              <p className="flex flex-col space-x-5 justify-center items-center">
                <span className="text-center">${price.toFixed(2)}</span>
                <button
                  className="p-1 bg-blue-400 rounded-lg hover:bg-blue-900 hover:scale-125 duration-500 ease-in-out"
                  onClick={() => handleClick(recipe.name, price, recipe.id)}
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
