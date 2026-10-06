let randomBtn = document.querySelector(".randomBtn");
let colorInput = document.querySelector("#colorInput");
let applyBtn = document.querySelector(".applyBtn");
let currentColorValue = document.querySelector(".currentColorValue");
let container = document.querySelector(".container");
        //////////random color /////////
function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color ="#";
    for(let i=0;i<6;i++){
        color+= letters[Math.floor(Math.random()*16)]
    }
    return color;
}

  //// change Color///
 let changeColor = (color)=>{
    
    if(color===""){
        return;
    }
    container.style.backgroundColor = color;
    currentColorValue.textContent = color;
 }

      //random button//
 function handlerRandomBtnClick(){
      let randomColor = getRandomColor();
    changeColor(randomColor);
    colorInput.value = randomColor;
 }
 
  
          //apply button//
function handlerApplyBtnClick(){
   changeColor(colorInput.value);
 }

  applyBtn.addEventListener('click',handlerApplyBtnClick);
  randomBtn.addEventListener('click',handlerRandomBtnClick);



 