let boxes= document.querySelectorAll(".btn");
let msgContainer=document.querySelector("#msg-container");
let msg=document.querySelector(".msg");
let newbtn=document.querySelector(".newbtn");
let resetBtn=document.querySelector(".resetbtn");


let turnX=true;
let turnO;
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      if (turnX==true) {
         box.innerText="🧔";
         turnX=false;
      }
      else{
         box.innerText="🧔🏻";
         turnX=true;
      }
      box.disabled=true;
      checkWinner();
   });
   
})
let winning=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,4,6],
   [2,5,8],
   [3,4,5],
   [6,7,8]
];
let msgBox=(winner)=>{
   msg.innerText=`Congrates ! Winner is ${winner}`;
   msg.classList.remove("hide");
}
let disablebtns=()=>{
   for(let box of boxes){
      box.disabled=true;
   }
}
let enablebtns=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}
let resetGame=()=>{
   turnX=true;
   msg.classList.add("hide");
   enablebtns();
}
const checkWinner=()=>{
   for(let pattern of winning){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;
      
      if(pos1val!="" && pos2val!="" && pos3val!=""){
         if(pos1val==pos2val && pos2val==pos3val ){
            disablebtns();
            msgBox(pos1val);
         }
      }
      
   }
   
};
newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);