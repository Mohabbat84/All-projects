let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


let dropdowns = document.querySelectorAll("select");
let btn = document.querySelector(".btn");
let amt = document.querySelector("#inp");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOptions = document.createElement("option");
    if (select.name === "from" && currCode === "INR") {
      newOptions.selected = "selected";
    } else if (select.name === "to" && currCode === "USD") {
      newOptions.selected = "selected";
    }
    newOptions.innerText = currCode;
    newOptions.value = currCode;
    select.append(newOptions);
  }
  select.addEventListener("change", (evt) => {
    flagUpdate(evt.target);
  });
}
const flagUpdate = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  let newSourch = `https://flagsapi.com/${countryCode}/flat/64.png`;
  img.src = newSourch;
};


const exchangeRate=async()=>{
  if (amt.value === "" || amt.value < 1) {
  amt.value = "1";
}
let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
let response = await fetch(URL);
let data = await response.json();
let rate = data[toCurr.value.toLowerCase()];
let finalAmmount = amt.value * rate;
msg.innerText = `${amt.value} ${fromCurr.value} = ${finalAmmount} ${toCurr.value}`;
}
btn.addEventListener("click",() => {
  exchangeRate();
});
window.addEventListener("load",()=>{
  exchangeRate();
});