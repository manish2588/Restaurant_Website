import AboutPage from "@/pages/AboutPage";
import TodaySpecial from "@/pages/TodaySpecial";
import ContactPage from "@/pages/ContactPage";
import Header from "./components/Header";
import TastyPage from "./pages/FoodPage";
import CartPage from "./pages/CartPage";

function AppLayout() {
  return (
    <>
      <div>
        <Header />
        <div id="about" className="min-h-screen m-0 p-0 ">
          <AboutPage />
        </div>
        <div id="menu" className="min-h-screen m-0 p-0">
          <TastyPage />
        </div>
        <div id="special" className="min-h-screen m-0 p-0">
          <TodaySpecial />
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
