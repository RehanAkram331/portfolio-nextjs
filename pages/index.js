import { Fragment } from "react";
import CommonHead from "../components/commonHead";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import ExprienceSec from "../components/Exprience/Exprience";
import Exprience2 from "../components/Exprience2/Exprience2";
import ProjectSection from "../components/ProjectSection/ProjectSection";
// import Testimonial from "../components/Testimonial/Testimonial";
import ContactArea from "../components/ContactArea";
import BlogSection from "../components/BlogSection/BlogSection";
import Footer from "../components/footer/Footer";
import Scrollbar from "../components/scrollbar/scrollbar";
import dynamic from "next/dynamic";
import Header from "../components/header/Header";
// import Pricing from "../components/Pricing/Pricing";
const Navbar = dynamic(() => import("../components/Navbar/Navbar"), {
  ssr: false,
  loading: () => (
    <div className="fixed-navbar">
      <Header />
    </div>
  ),
});
// const Scrollbar = dynamic(() => import("../components/scrollbar/scrollbar"), {
//   ssr: false,
// });

export default function Home() {
  return (
    <div id="scrool">
      <CommonHead />
      <Fragment>
        <div className="br-app">
          <Navbar />
          <Hero />
          <About />
          <ServiceSection />
          {/* <ExprienceSec /> */}
          <Exprience2 />
          <ProjectSection />
          {/* <Testimonial /> */}
          {/* <Pricing/> */}
          <ContactArea />
          {/* <BlogSection /> */}
          <Footer />
          <Scrollbar />
        </div>
      </Fragment>
    </div>
  );
}
