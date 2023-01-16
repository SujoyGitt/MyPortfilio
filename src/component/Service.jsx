import Heart from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import myresume from "./My Resume 2023 January.pdf";
let Services = ()=>{
  window.addEventListener("scroll",()=>{
    let s = window.scrollY;
    if (s > 370 && s < 900) {
      document.querySelector('.card1').classList.add('card1add');
    }else{
      document.querySelector('.card1').classList.remove('card1add');
    }
    if (s > 270 && s < 800) {
      document.querySelector('.card2').classList.add('card2add');
    }else{
      document.querySelector('.card2').classList.remove('card2add');
    }
    if (s > 420 && s < 1000) {
      document.querySelector('.card3').classList.add('card3add');
    }else{
      document.querySelector('.card3').classList.remove('card3add');
    }
  })
  return(
<div id="Service" className="common">
  <div className="ServiceAwesome">
    <span>My Awesome</span>
    <span>Services</span>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id at sunt<br/> eum nostrum non tenetur magni, eos sint. Cumque.</span>
    <a href={myresume} target="_blank" download><button className="button servicebtn">Download Resume</button></a>
    <div className="blur serviceblur1"></div>
    <div className="blur serviceblur2"></div>
  </div>
  <div className="ServiceCards">
    
    <div className="Card card1">
      <img src={Glasses} alt="" />
      <p className="cardheading">Devoloper</p>
      <p>Html,css,javascript,react js,jquery</p>
      <button className="Cardbtn">LEARN MORE</button>
    </div>
    <div className="Card card2">
      <img src={Heart} alt="" />
      <p className="cardheading">Design</p>
      <p>Html,svg,canvas,css</p>
      <button className="Cardbtn">LEARN MORE</button>
    </div>
    <div className="Card card3">
      <img src={Humble} alt="" />
      <p className="cardheading">UI/UX</p>
      <p>Bootstrap,Sass,Material ui,svg</p>
      <button className="Cardbtn">LEARN MORE</button>
    </div>
   </div>
 </div>
  )
}
export default Services;