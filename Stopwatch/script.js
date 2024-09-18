let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let mili = document.querySelector("#mili");
let startBtn=document.querySelector("#start");
let stopBtn=document.querySelector("#stop");
let resetBtn=document.querySelector("#reset");


let hour=0;
let minute=0;
let second=0;
let milisecond=0;
let timer=false;

startBtn.addEventListener("click",()=>{
    timer=true;
    stopwatch();
    startBtn.disabled=true;
});
stopBtn.addEventListener("click",()=>{
    timer=false;
    stopwatch();
    startBtn.disabled=false;
});
resetBtn.addEventListener("click",()=>{
    timer=false;
    stopwatch();
    startBtn.disabled=false;
    minute=0;
    milisecond=0;
    second=0;
    hour=0;
    miliStr="00";
    secStr="00";
    minStr="00";
    hrStr="00";
    mili.innerHTML=miliStr;
    sec.innerHTML=secStr;
    min.innerHTML=minStr;
    hr.innerHTML=hrStr;
});
let stopwatch=()=>{
   
    let hrStr=hour;
    let minStr=minute;
    let secStr=second;
    let miliStr=milisecond;
    if(timer){
       milisecond++;
       
        if(milisecond==100){
            milisecond=0;
            second++;
        }
        if(second==60){
            milisecond=0;
            second=0;
            minute++;
        }
        if(minute==60){
            milisecond=0;
            second=0;
            minute=0;
            hour++;
        }
        if(milisecond<10){
         miliStr="0"+miliStr;  
        }
        if(second<10){
            secStr="0"+secStr;  
           }
        if(minute<10){
            minStr="0"+minStr;  
           }
        if(hour<10){
            hrStr="0"+hrStr;  
    }
    mili.innerHTML=miliStr;
    sec.innerHTML=secStr;
    min.innerHTML=minStr;
    hr.innerHTML=hrStr;
    setTimeout("stopwatch()",1);
}   

};