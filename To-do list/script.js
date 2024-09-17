let inputs=document.querySelector("#writeToDo");
let btn=document.querySelector(".toDoBtn");
let todos=document.querySelector(".list");
let span=document.querySelector("span");
btn.addEventListener("click",()=>{
    if(inputs.value==""){
        alert("Please enter your task");
    }
    else{
        let newEl=document.createElement("li");
        newEl.innerText=`${inputs.value} `;
        todos.appendChild(newEl);
        let msg=document.createElement("span");
        msg.innerText="Clear";
        newEl.appendChild(msg);
        inputs.value="";
        newEl.querySelector("span").addEventListener("click",()=>{
            newEl.remove();
        });
    }
});