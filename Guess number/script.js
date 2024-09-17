let inp=document.querySelector("#inp");
let btn=document.querySelector("#btn");
let user=document.querySelector("#user");
let bot=document.querySelector("#bot");
let result=document.querySelector("#result");
let gifts=document.querySelector("#gifts");
let giftsArr=["Amazone Gift Voucher","Google Play voucher","Amazone Discount 20%","Hotstar Premiume","Paytm Gift Voucher","PhonePe Wallet Voucher"];
btn.addEventListener("click",()=>{
    let randomNum=Math.floor(Math.random()*4);
let randomIdx=Math.floor(Math.random()*6);
    bot.innerText=`The number is ${randomNum}`;
    user.innerText=`Your decision is ${inp.value}`;
    if(inp.value=="" || inp.value>3){
        alert("Please Enter Right Number");
        user.innerText="";
        bot.innerText="";
        inp.value="";
    }
    else if(randomNum==inp.value){
            result.innerText="Correct";
            gifts.innerText=`Gift :- ${giftsArr[randomIdx]}`;
            result.style.backgroundColor="green";
            inp.value="";
        }
        else{
            result.innerText="Wrong";
            result.style.backgroundColor="red";
            gifts.innerText="";
            inp.value="";
        }
});