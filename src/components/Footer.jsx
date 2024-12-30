import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black w-full h-full lg:flex font-serif my-2 text-white">
      {/* Contact Information Section */}
      <section className="lg:basis-2/5 px-8 mx-auto lg:max-w-xl lg:my-6">
        <h1 className="text-3xl text-orange-600">Contact Information</h1>
        <br />
        <p>ADDRESS: Kathmandu, Nepal</p>
        <p>FOR BOOKING: 98XXXXXXXX</p>
        <p>Email: info@neplaibhancha.com.np</p>
        <br />
        <h1 className="text-3xl text-orange-600">Restaurant Hours</h1>
        <p>Every Day</p>
        <p>10:00 AM - 10:00 PM</p>
      </section>

      {/* Location and Social Media Section */}
      <section className="lg:basis-3/5 font-serif my-6 lg:pl-8">
        <div className="w-full flex flex-col space-y-2 justify-center items-center mb-4">
          <h1 className="text-3xl text-orange-600">Location</h1>
          <p>Kathmandu, Nepal</p>
          <img src="/image/Location.jpg" className="object-cover lg:w-2/5 h-auto p-4" alt="Restaurant Location" />
          <div className="flex space-x-4">
            <div className="p-1">
              <FaFacebook size={30} color="blue" />
            </div>
            <div className="p-1">
              <FaInstagram size={30} />
            </div>
            <div className="p-1">
              <FaWhatsapp size={30} color="green" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
