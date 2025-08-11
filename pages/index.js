import React, {Fragment} from 'react';
import About from '../components/about/about';
import BlogSection from '../components/BlogSection/BlogSection';
import CommonHead from '../components/commonHead';
import ContactArea from '../components/ContactArea';
import ExprienceSec from '../components/Exprience/Exprience';
import Exprience2 from '../components/Exprience2/Exprience2';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/hero';
import Navbar from '../components/Navbar/Navbar';
import Pricing from '../components/Pricing/Pricing';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import Contact from '../components/ProjectSingle/contact';
import ProjectSingle from '../components/ProjectSingle/ProjectSingle';
import Scrollbar from '../components/scrollbar/scrollbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ServiceSingle from '../components/ServiceSingle';
import Testimonial from '../components/Testimonial/Testimonial';

export default function Home() {
  return (
    <div id='scrool'>
      <CommonHead/>
      <Fragment>
            <div className="br-app">
                <Navbar/>
                <Hero/>
                <About/>
                <ServiceSection/>
                <ExprienceSec/>
                <Exprience2/>
                <ProjectSection/>
                <Testimonial/>
                <Pricing/>
                <ContactArea/>
                <BlogSection/>
                <Footer/>
                <Scrollbar/>
            </div>
        </Fragment>
    </div>
  )
}
