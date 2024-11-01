// import dynamic from 'next/dynamic';

// const Hero = dynamic(() => import('./Hero'), { ssr: false });
// const AboutUs = dynamic(() => import('./AboutUs'), { ssr: false });
// const Services = dynamic(() => import('./Services'), { ssr: false });
// const Technology = dynamic(() => import('./Technology'), { ssr: false });
// const Featured = dynamic(() => import('./Featured'), { ssr: false });
// const Contacts = dynamic(() => import('./Contacts'), { ssr: false });
// const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });


// const Page = () => {
//   return (
//     <div>
//       <div>
//         <Hero />
//       </div>
//       <div>
//         <AboutUs />
//       </div>
//       <div>
//         <Services />
//       </div>
//       <div>
//         <Technology />
//       </div>
//       <div>
//         <Featured />
//       </div>
//       <div>
//         <Contacts />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Page;

import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Technology from "./Technology";
import Featured from "./Featured";
import Contacts from "./Contacts";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <Technology />
      <Featured />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Page;

