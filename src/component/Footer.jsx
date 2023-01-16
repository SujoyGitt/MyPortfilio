let Footer = ()=>{
  return(
    <>
    <div id="Footer">
      <div className="contactdetails">
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='_blank'>sujoy143656@gmail.com</a>
        <ul>
          <a href="https://www.linkedin.com/in/sujoy-ghosal-722282248/"  target='_blank'><span><i class="fa-brands fa-linkedin"></i></span></a>

          <a href="https://m.facebook.com/sujoy.ghosal.522?eav=AfaczOcbrIHS-W7lSZup6YLvWAISYykzTdEEnPRzvNFXRRkoTYt5TRoode1fMKuJBvM&paipv=0" target='_blank'>   <span><i class="fa-brands fa-square-facebook"></i></span></a>
          
          <a href="https://github.com/SujoyGitt" target='_blank'>  <span><i class="fa-brands fa-github"></i></span></a>
         </ul>
      </div>
      <p>  <i class="fa-regular fa-copyright"></i> {new Date().toLocaleDateString()} Built  Using  Reactjs,scss.  Volume --  1.   {new Date().toLocaleTimeString()}</p>
    </div>
    </>
  )
};
export default Footer;