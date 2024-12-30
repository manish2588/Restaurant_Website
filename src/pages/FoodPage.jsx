import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

function TastyPage() {
  const recipes = useLoaderData();

  if (!recipes || recipes.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 font-serif">
        Foods
      </h1>
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="rounded-lg p-4 hover:scale-105 duration-500 ease-in-out"
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
