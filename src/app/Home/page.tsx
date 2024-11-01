import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Technology from "./Technology";
import Featured from "./Featured";
import Contacts from "./Contacts";
import Footer from "@/components/Footer";



const Headers = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Technology />
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <Contacts />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Headers;
