import { TabsDemo } from "@/components/Tab";

function TodaySpecial() {
  return (
    <>
      <main className="lg:flex lg:space-x-4 w-full lg:h-screen mt-16 ">
        <section id="photo" className="basis-1/2   ">
          <div className="lg:w-3/5 lg:mx-auto h-4/5 overflow-hidden mt-8 p-4 lg:p-0 ">
            <img
              src="/image/Onee.png"
              className="h-full w-full object-cover hover:scale-110 duration-1000 ease-in-out"
            />
          </div>
        </section>
        <section id="menu" className="basis-1/2  p-4 lg:p-0">
          <div className="lg:w-2/3 lg:mx-auto flex flex-col space-y-4">
            <span className="text-xl font-light">Try and Discover</span>
            <p className="font-serif text-4xl">Our Nepali Set Menu</p>
            <TabsDemo />
          </div>
        </section>
      </main>
    </>
  );
}

export default TodaySpecial;
