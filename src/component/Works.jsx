let Works =()=>{
  window.addEventListener("scroll",()=>{
    let s = window.scrollY;
    if (s>1300) {
      document.querySelector('.Worksright').classList.add('brandadd');
    }else{
      document.querySelector('.Worksright').classList.remove('brandadd');
    }
  })
  return(
    <>
    <div id="Works">
     <div className="ServiceAwesome Worksservice">
       <span>Works for All these</span>
       <span>Brands and Client</span>
       <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id at sunt<br/> eum nostrum non tenetur magni, eos sint. Cumque.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi id at sunt<br/> eum nostrum non tenetur magni, eos sint. Cumque.</span>
       <a href='/'><button className="button servicebtn Worksbtn">Hire me</button></a>
       <div className="blur serviceblur1"></div>
     </div>
      <div className="Worksright">
      <div className="brand">
        <div className="brandname brandupwork"></div>
        <div className="brandname brandfiverr"></div>
        <div className="brandname brandfacebook"></div>
        <div className="brandname brandsopify"></div>
        <div className="brandname brandamazon"></div>
      </div>
      </div>
    </div>
    </>
  )
};
export default Works;