import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "../../components/Footer";
import Featured from "./Featured";
import Technology from "./Technology";
import Contacts from "./Contacts"
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
      {/* <div>
        <Contact />
      </div> */}
<div><Contacts/></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Headers;
