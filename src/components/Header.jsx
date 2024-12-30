import NavBar from "./NavBar";

function Header() {
  return (
    <>
      <div className="bg-slate-300 h-screen w-full bg-[url('/image/BG.jpg')] bg-cover bg-no-repeat bg-center relative">
        <div className="fixed w-full">
            <NavBar/>
        </div>
        <div className=" flex flex-col justify-center items-center h-full w-full">
        <h1 className="text-white font-serif text-6xl font-medium text-center">
          Authentic Nepali
        </h1>
        <h1 className="text-white font-serif text-6xl font-medium text-center">
          Restaurant
        </h1>
        </div>
      
      </div>
    </>
  );
}

export default Header;
