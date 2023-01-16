import Glasses from '../img/glasses.png';
import Glassesemoji from '../img/glassesimoji.png';
import Heart from '../img/heartemoji.png';
import Humble from '../img/humble.png';
let random  = ()=>{      
let colors = [Glasses,Glassesemoji,Heart,Humble];
setInterval(() => {
    let section = document.querySelector("body");
    let squire = document.createElement("span");
    squire.classList.add('random');
    section.appendChild(squire);

    let size = Math.random()*100;
    squire.style.width =20 + size + 'px'; 
    squire.style.height =20+ size + 'px'; 

    squire.style.top= Math.random() * innerHeight+'px';
    squire.style.left= Math.random() * innerWidth+"px";
    squire.style.background = `url(${colors[Math.floor(Math.random()*colors.length)]})`;
    squire.style.backgroundSize='cover';
    squire.style.backgroundRepeat='norepeat';

    setTimeout(() => {
        squire.remove();
    }, 45000);

}, 1400);

  return(
    <>
    
    </>
  )
}
export default random;