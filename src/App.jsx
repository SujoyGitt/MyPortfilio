import Navbar from './component/Navbar';
import Intro from './component/Intro';
import Option from './component/Option';
import Scrollbar from './component/Scrollbar';
import Services from './component/Service';
import Spinner from './component/Spinner';
import About from './component/About';
import Works from './component/Works';
import Portfolio from './component/Portfolio';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Random from './component/random';
import { useState } from 'react';
const App = () => {
  let [load,setload]=useState(false);
  window.onload = function() {
  setload(true);
}
  return (
    <>
      <Random/>
      <Spinner onload={load}/>
      <Option/>
      <Navbar/>
      <Scrollbar/>
      <Intro/>
      <Services/>
      <About/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    
    </>
  );
};
export default App;
