import { useEffect } from "react";
import { useState } from "react";
let Scrollbar = ()=>{
let [height,setheight]= useState(0);
useEffect(()=>{
  let totalHeight = document.body.scrollHeight-window.innerHeight;
  window.addEventListener('scroll',(e)=>{
     let progressHeight = (window.scrollY/totalHeight)*100 ;
     progressHeight = Math.trunc(progressHeight);
     setheight(progressHeight);
     document.getElementById('pregressbar').style.height = height + '%';
  });
})


return(
    <>
     <div id="pregressbar"></div>
    </>
  )
}
export default Scrollbar;