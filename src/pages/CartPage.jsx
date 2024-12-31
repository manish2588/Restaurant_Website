import { useSelector, useDispatch } from "react-redux";
import { delete_item } from "@/redux_toolkit/CardSlice";
import { useState } from "react";
function CartPage() {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [message, setMessage] = useState(false);
  const totalPrice = cart.map(item => item.price).reduce((sum, price) => sum + price, 0);

  
  const handleDelete = (id) => {
    dispatch(delete_item(id));
    setMessage("Delete Successfully");
    setTimeout(() => setMessage(""), 1000);
  };

  if (cart.length < 1)
    return (
      <div className="flex justify-center items-center h-screen font-semibold text-4xl">
        No Items In Cart
      </div>
    );

  return (
    <main className="p-4 lg:p-8">
      <section id="items">
        {cart && (
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            {message && (
              <div className="fixed top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/4 bg-black  p-6 rounded-lg shadow-lg max-w-md w-full">
                <div className="text-xl font-serif text-center text-orange-600">
                  {message}
                </div>
              </div>
            )}

            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-gray-300 rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out font-mono"
              >
                <h1 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  Item: {index + 1}
                </h1>
                <p className="text-gray-600 text-lg">
                  <span className="font-medium">Name:</span> {item.name}
                </p>
                <p className="text-gray-600 text-lg">
                  <span className="font-medium ">Price:</span> $
                  {item.price.toFixed(2)}
                </p>
                <p className="mt-1">
                  <button
                    className="bg-red-600 px-2 py-1 rounded-lg"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
      <section
        id="bill"
        className="p-6 bg-gray-50 rounded-lg shadow-md lg:w-1/2 mx-auto mt-6"
      >
        <table className="min-w-full bg-white border-collapse border border-orange-500 font-mono">
          <caption className="caption-top text-2xl font-semibold text-gray-700 mb-4">
            BILL
          </caption>
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-800">{item.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  ${item.price.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
                <td className="px-6 py-4 text-lg text-gray-800">Total</td>
                <td className="px-6 py-4 text-sm text-gray-800">${totalPrice.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
       
      </section>
    </main>
  );
}

export default CartPage;
