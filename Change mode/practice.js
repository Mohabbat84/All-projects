let sec=document.querySelector("#sec");
let body=document.querySelector("body");
let main=document.querySelector("#main");
let h1=document.querySelector("h1");
let left=true;
sec.addEventListener("click",()=>{
  if(left){
    sec.style.marginLeft="2.8rem";
    left=false;
    body.style.backgroundColor="black";
    sec.style.backgroundColor="black";
    main.style.backgroundColor="white";
    h1.style.color="white";
  }
  else{
    sec.style.marginLeft="5px";
    left=true;
    body.style.backgroundColor="white";
    sec.style.backgroundColor="white";
    main.style.backgroundColor="black";
    h1.style.color="black";
  }
  
  
})