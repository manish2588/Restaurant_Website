import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import LocationImage from "../../public/image/Location.jpg";
function Footer() {
  return (
    <>
      <div className="bg-black w-full h-full lg:flex font-serif my-2 text-white ">
        {/* Left section with content */}
        <div className="lg:basis-2/5  px-8 mx-auto lg:max-w-xl lg:my-6">
          <h1 className="text-3xl text-orange-600">Contact Information</h1>
          <br/>
          <p>ADDRESS : Kathmandu, Nepal</p>
          <p>FOR BOOKING : 98XXXXXXXX</p>
          <p>Email : info@neplaibhancha.com.np</p>
          <br />
          <h1 className="text-3xl text-orange-600">Restaurant hours</h1>
          <p>EveryDay</p>
          <p>10:00 AM - 10:00 PM</p>
        </div>

        {/* Empty section for now */}
        <div className="lg:basis-3/5  font-serif my-6 ">
          <div className=" w-full flex flex-col space-y-2 justify-center items-center mb-4">
            <h1 className="text-3xl text-orange-600">Location</h1>{" "}
            <p>Kathmandu, Nepal</p>
            <img src={LocationImage} className="object-cover lg:w-2/5 h-auto p-4" />{" "}
            <div className="flex  space-x-4">
              <div className="p-1">
                <FaFacebook size={30} color="blue"  />
              </div>
              <div className="p-1">
                <FaInstagram size={30} color="blue" />
              </div>
              <div className="p-1">
                <FaWhatsapp size={30} color="blue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
