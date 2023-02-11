import { useEffect } from 'react';
import Profile1 from '../img/profile1.jpg';
import Profile2 from '../img/profile2.jpg';
import Profile3 from '../img/profile3.jpg';
import Profile4 from '../img/profile4.jpg';
import Profile5 from '../img/profile5.jpg';
import Profile6 from '../img/profile6.jpg';

let Testimonial = ()=>{
  useEffect(()=>{
    let Child = document.querySelector(".child");

  var k = 1;
let count = 0;
setInterval(() => {
  k = k + 1;
  count += 16.67;
  if (Child) {
    Child.style.transform = "translateX(" + "-" + count + "%" + ")";
    Child.style.transition = .3+"s";
  }
  if (count > 96) {
      count = 0;
      if(Child){
        Child.style.transform = "translateX(" + "-" + count + "%" + ")";
        Child.style.transition = 0+"s";
      }
  }
 if (k > 6) {
  k = 1;
  document.querySelector(".i" + k).checked = true;
 }
  document.querySelector(".i" + k).checked = true;
  // Child.style.transform=`translateX(-${count}%)`;
}, 3000);

//indicator start

document.querySelector('.i1').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(0%)";
  }
});
document.querySelector('.i2').addEventListener('click',()=>{
  if(Child){
Child.style.transform = "translateX(-16.67%)";
}
});
document.querySelector('.i3').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-33.34%)";
  }
});
document.querySelector('.i4').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-50.1%)";
  }
});document.querySelector('.i5').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-66.68%)";
  }
});
document.querySelector('.i6').addEventListener('click',()=>{
  if(Child){
    Child.style.transform = "translateX(-83.35%)";
  }
})
  


//indicator end
  })
return(
  
  <>
    <div id='Testimonial'>
        <div className="main">
          <h4>Client</h4>
          <h2>testimonial</h2>
           <div className="child">
              <div className="childOne">
                <img src={Profile1} alt=""/>
                <h3>Sandy</h3>
                <span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                        className="fas fa-star"></i><i className="fas fa-star"></i>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, blanditiis, minima quia quas repellat
                    cumque rerum, itaque suscipit voluptas deserunt expedita eum officiis quibusdam quaerat!</p>
                <h2><i className="fas fa-quote-left"></i></h2>
              </div>
              <div className="ChildTwo">
                <img src={Profile2} alt=""/>
                <h3>Sandy</h3>
                <span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                        className="fas fa-star"></i><i className="fas fa-star"></i>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, blanditiis, minima quia quas repellat
                    cumque rerum, itaque suscipit voluptas deserunt expedita eum officiis quibusdam quaerat!</p>
                <h2><i className="fas fa-quote-left"></i></h2>
              </div>
              <div className="ChildThree">
                <img src={Profile3} alt=""/>
                <h3>Sandy</h3>
                <span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                        className="fas fa-star"></i><i className="fas fa-star"></i>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, blanditiis, minima quia quas repellat
                    cumque rerum, itaque suscipit voluptas deserunt expedita eum officiis quibusdam quaerat!</p>
                <h2><i className="fas fa-quote-left"></i></h2>
              </div>
              <div className="ChildFour">
                <img src={Profile4} alt=""/>
                <h3>Sandy</h3>
                <span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                        className="fas fa-star"></i><i className="fas fa-star"></i>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, blanditiis, minima quia quas repellat
                    cumque rerum, itaque suscipit voluptas deserunt expedita eum officiis quibusdam quaerat!</p>
                <h2><i className="fas fa-quote-left"></i></h2>
              </div>
              <div className="ChildFive">
                <img src={Profile5} alt=""/>
                <h3>Sandy</h3>
                <span>
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i
                        className="fas fa-star"></i><i className="fas fa-star"></i>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, blanditiis, minima quia quas repellat
                    cumque rerum, itaque suscipit voluptas deserunt expedita eum officiis quibusdam quaerat!</p>
                <h2><i className="fas fa-quote-left"></i></h2>
              </div>
              <div className="ChildSix">
                <img src={Profile6} alt=""/>
                <h3>Sandy</h3>
                <span> <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, blanditiis, minima quia quas repellat
                    cumque rerum, itaque suscipit voluptas deserunt expedita eum officiis quibusdam quaerat!</p>
                <h2><i className="fas fa-quote-left"></i></h2>
            </div>
         </div>
        </div>
        <div className="indicator">
            <input type="radio" className="i1" name="su" value="jpg/1.jpg" />
            <input type="radio" className="i2" name="su" value="jpg/2.jpg" />
            <input type="radio" className="i3" name="su" value="jpg/3.jpg" />
            <input type="radio" className="i4" name="su" value="jpg/4.jpg" />
            <input type="radio" className="i5" name="su" value="jpg/5.jpg" />
            <input type="radio" className="i6" name="su" value="jpg/5.jpg" />
        </div>
        <div className="blur left"></div>
        <div className="blur right"></div>
    </div>
    </>
  );





}
export default Testimonial;