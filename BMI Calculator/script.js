let height=document.querySelector("#height");
let weight=document.querySelector("#weight");
let subBtn=document.querySelector("#submit");
let msg=document.querySelector(".msg");
let resetBtn=document.querySelector("#reset");


subBtn.addEventListener("click",()=>{
    if(height.value==""){
        msg.innerText="Please Enter Height";
        return;
    }
    else if(weight.value==""){
        msg.innerText="Please Enter Weight";
        return;
    }

    let bmi=weight.value/(height.value*height.value)*10000;
    if(bmi<18.50){
        msg.innerText=`Underweight:BMI is ${bmi.toFixed(2)}`;
    }
    else if(bmi>=18.50 && bmi<=24.9){
        msg.innerText=`Normal:BMI is ${bmi.toFixed(2)}`;   
    }
    else if(bmi>25 && bmi<=29.9){
        msg.innerText=`Overweight:BMI is ${bmi.toFixed(2)}`;
    }
    else if(bmi>30 && bmi<=34.9){
        msg.innerText=`Obese:BMI is ${bmi.toFixed(2)}`;
    }
    else if(bmi>35){
        msg.innerText=`Extremely obese:BMI is ${bmi.toFixed(2)}`;
    }
});
resetBtn.addEventListener("click",()=>{
    height.value="";
    weight.value="";
    msg.innerText="Result";
});