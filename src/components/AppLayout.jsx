import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoadingSpinner from "./LoadingSpinner";

function AppLayout() {
  const navigation = useNavigation();
  
  // Show global loading state when navigation is loading
  if (navigation.state === "loading") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
       <LoadingSpinner/>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
