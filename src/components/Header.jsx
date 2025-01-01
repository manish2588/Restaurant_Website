import NavBar from "./NavBar";

function Header() {
  return (
    <div className="relative">
      {/* Background image with overlay */}
      <div className="bg-slate-300 h-screen w-full bg-[url('/image/BG.jpg')] bg-cover bg-no-repeat bg-center relative">
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-gray-600 opacity-50"></div>

        {/* Fixed Navbar */}
        <div className="fixed w-full z-50">
          <NavBar />
        </div>

        {/* Header Content */}
        <div className="flex flex-col justify-center items-center h-full w-full relative z-10">
          <h1 className="text-white font-serif text-6xl font-medium text-center">
            Authentic Nepali
          </h1>
          <h1 className="text-white font-serif text-6xl font-medium text-center">
            Restaurant
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
