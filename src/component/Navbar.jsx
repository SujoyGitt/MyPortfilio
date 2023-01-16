import { WbSunny } from "@material-ui/icons";
import { NightsStayOutlined } from "@material-ui/icons";
let Navbar = () => {
  window.addEventListener('scroll',(e)=>{
    let k = window.scrollY;
    if (k > 50) {
      document.querySelector('.Navbar').classList.add('navadd');
    }else{
      document.querySelector('.Navbar').classList.remove('navadd');
    }
  })
  let togglem = ()=>{
   document.querySelector(".navlist").classList.toggle("toggleAdd");
  }
  let dark = ()=>{
     document.querySelector(".darkmode").classList.toggle('moon');
     document.querySelector(".navlogo").classList.toggle('navlogoadd');
     document.querySelector(":root").classList.toggle('rootadd');
  }
  return (
    <>
     <div className="Navbar">
      <div className="navLeft">
        <div className="navlogo"></div>
        <div className="darkmode" onClick={dark}><WbSunny/><NightsStayOutlined/><span></span></div>
      </div>
      <div className="navRight">
        <div className="togglemenu" onClick={togglem}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 20"><path fill-rule="evenodd" d="M17.85 11H14.7c-1.74 0-3.15 1.343-3.15 3v3c0 1.657 1.41 3 3.15 3h3.15c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3M6.3 11H3.15C1.41 11 0 12.343 0 14v3c0 1.657 1.41 3 3.15 3H6.3c1.74 0 3.15-1.343 3.15-3v-3c0-1.657-1.41-3-3.15-3M17.85 0H14.7c-1.74 0-3.15 1.343-3.15 3v3c0 1.657 1.41 3 3.15 3h3.15C19.59 9 21 7.657 21 6V3c0-1.657-1.41-3-3.15-3m-8.4 3v3c0 1.657-1.41 3-3.15 3H3.15C1.41 9 0 7.657 0 6V3c0-1.657 1.41-3 3.15-3H6.3c1.74 0 3.15 1.343 3.15 3" fill="#d8a353" class="color000000 svgShape"></path></svg>
          </div>
        <div className="navlist">
          <ul>
           <a href='#intro'><li>Home</li></a>
           <a href='#Service'><li>Service</li></a>
           <a href='#Works'><li>About</li></a>
           <a href='#portfolio'><li>Portfolio</li></a>
           <a href='#Testimonial'><li>Testimonial</li></a>
          </ul>
        </div>
        <a href="#Contact"><button className="button">Contact</button></a>
      </div>
     </div>
    </>
  );
};
export default Navbar;
