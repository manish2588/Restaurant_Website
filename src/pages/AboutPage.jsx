import { Button } from "@/components/ui/button";

function AboutPage() {
  return (
    <>
      <main className="lg:flex lg:space-x-2 w-full mt-8">
        <section
          id="description"
          className=" basis-1/2 px-4 lg:my-auto"
        >
          <div className="w-full lg:w-2/3 lg:ml-36 ">
            <p className="font-extralight"> Namaste !From </p>
            <h1 className="text-4xl font-bold font-serif"> Nepali Bhanchha</h1>
            <br />
            <p className="font-light text-base ">
              Nepali Bhanchha is an authentic Nepali restaurant that serves
              traditional and delicious cuisine. The restaurant offers an
              immersive cultural experience, featuring live cultural shows that
              showcase the rich and diverse heritage of Nepal. Diners can enjoy
              a variety of dishes, made with fresh and locally sourced
              ingredients, while taking in the vibrant atmosphere of the
              restaurant. With its authentic Nepali decor and warm hospitality,
              Nepali Bhanchha is the perfect place to experience the flavors and
              culture of Nepal.
              <br />
              <br />
              Discover the authentic taste of Nepal at Nepali Bhanchha, an
              authentic Nepali restaurant with a cultural show. Enjoy fresh,
              flavorful Nepali cuisine while being entertained by traditional
              dance and music performances. Book your table today and immerse
              yourself in the culture of Nepal.
            </p>
          </div>
          <Button> Hello</Button>
        </section>

        <section
          id="figure"
          className=" basis-1/2 flex justify-center w-full h-screen"
        >
          <div className=" lg:w-3/5 lg:h-4/5 lg:my-auto overflow-hidden">
            <img src="/image/BG.jpg" className="h-full p-4 lg:p-0 hover:scale-125 duration-1000 ease-in-out " />
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
