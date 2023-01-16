import img1 from '../Portfolioimg/Screenshot_6.png';
import img2 from '../Portfolioimg/Screenshot_7.png';
import img3 from '../Portfolioimg/Screenshot_8.png';
import img4 from '../Portfolioimg/Screenshot_9.png';
import img5 from '../Portfolioimg/Screenshot_10.png';
import img6 from '../Portfolioimg/Screenshot_11.png';
import img7 from '../Portfolioimg/Screenshot_12.png';
import img8 from '../Portfolioimg/Screenshot_13.png';
import img9 from '../Portfolioimg/Screenshot_15.png';

let Portfolio = ()=>{

  let wheelfun = ()=>{
    document.querySelector('.portfoliocontainer').addEventListener('wheel',(e)=>{
      e.preventDefault();
      document.querySelector('.portfoliocontainer').scrollLeft += e.deltaY;
      
    })
  }
 
  return(
  <>
  <div id="portfolio">
    <div className="portfoliohead">
      <h2>Resent Project</h2>
      <h1>Portfolio</h1>
    </div>
    <div className="portfoliocontainer" onWheel={wheelfun} >
        <div><img src={img1} alt="" /></div>
        <div><img src={img2} alt="" /></div>
        <div><img src={img3} alt="" /></div>
        <div><img src={img4} alt="" /></div>
        <div><img src={img5} alt="" /></div>
        <div><img src={img6} alt="" /></div>
        <div><img src={img7} alt="" /></div>
        <div><img src={img8} alt="" /></div>
        <div><img src={img9} alt="" /></div>
      
    </div>
  </div>
  </>
  )
};
export default Portfolio;