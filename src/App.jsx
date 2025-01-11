import AboutPage from "@/pages/AboutPage";
import TodaySpecial from "@/pages/MenuPage";
import ContactPage from "@/pages/ContactPage";
import Header from "./components/Header";
import TastyPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import MenuPage from "@/pages/MenuPage";
import OrderPage from "./pages/OrderPage";

function AppLayout() {
  return (
    <>
      <div>
        <Header />
        <div id="about" className="min-h-screen m-0 p-0 ">
          <AboutPage />
        </div>
        <div id="order" className="min-h-screen m-0 p-0">
         <OrderPage/>
        </div>
        <div id="menu" className="min-h-screen m-0 p-0">
         <MenuPage/>
        </div>
        <div id="cart" className="min-h-screen m-0 p-0">
          <CartPage />
        </div>
        <div id="contact" className="min-h-screen m-0 p-0">
          <ContactPage />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
