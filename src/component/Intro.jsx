// import Navbar from "./Navbar";
import GitHub from "../../src/img/github.png";
import LinkIn from "../../src/img/linkedin.png";
import Instagram from "../../src/img/instagram.png";
import Vector1 from "../../src/img/Vector1.png";
import Vector2 from "../../src/img/Vector2.png";
import boy from "../../src/img/boy.png";
import Thumbup from "../../src/img/thumbup.png";
import Glassemoji from "../../src/img/glassesimoji.png";
import Crown from "../../src/img/crown.png";
let Intro = () => {
 
  return (
    <>
      <div id="intro" className="common">
       <div className="introleft">
         <div className="introname">
          <h1>Hy! I Am </h1><br />
          <span className="introleftname" > Sujoy Ghosal</span><br />
          <span className="introparagraph">Hi , I'm Sujoy Ghosal , and I graduated from the Burdwan Raj collenge in 2022. As a highly motivated for technology and design.</span><br />
          <a href="#Contact"><button className="introbtn button">Hire me</button></a>
         </div>
         <div className="introicon">
          <a href="https://github.com/SujoyGitt" target="_blank" ><img src={GitHub} alt="" /></a>
          <a href="https://www.linkedin.com/in/sujoy-ghosal-722282248/" target="_blank" className='introlinkdin'><img src={LinkIn}  alt="" /></a>
          <a href="https://www.instagram.com/sujoy7h9s1l/" target="_blank"><img src={Instagram} alt="" /></a>
         </div>
       </div>
       <div className="introright">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={boy} alt="boy" />
        <img src={Glassemoji} alt="" />
    <div className="floatingDiv">
      <div className="floatingImg" ><img src={Thumbup} alt="thum" /></div>
      <div>Frontend<br/>Devoloper</div>
    </div>
    <div className="floatingDiv floatdiv2">
    <div className="floatingImg" ><img src={Crown} alt="thum" /></div>
      <div>Best Design<br/>Award</div>
    </div>
         <div className="blur"></div>
         <div className="blur introblur2" ></div>
       </div>
      </div>
    </>
  );
};
export default Intro;
