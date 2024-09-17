let counter=document.querySelector("#count");
let incBtn=document.querySelector("#inc");
let decBtn=document.querySelector("#dec");
let stopBtn=document.querySelector("#stop");
let resetBtn=document.querySelector("#reset");
let count=0;
let timer=false;

incBtn.addEventListener("click",()=>{
    timer=false;
    countInc();
    incBtn.disabled=true;
    decBtn.disabled=true;
    
});

let countInc=()=>{
    if(timer==false){
        count++;
        counter.innerText=count;
        setTimeout("countInc()",1000);
    }
   
}

decBtn.addEventListener("click",()=>{
    timer=false;
    countDec();
    decBtn.disabled=true;
    incBtn.disabled=true;
});

let countDec=()=>{
    if(timer==false){
        count--;
    counter.innerText=count;
    setTimeout("countDec()",1000);
    }
}

stopBtn.addEventListener("click",()=>{
    timer=true;
    decBtn.disabled=false;
    incBtn.disabled=false;
});
resetBtn.addEventListener("click",()=>{
    timer=true;
    count=0;
    counter.innerText=count;
});