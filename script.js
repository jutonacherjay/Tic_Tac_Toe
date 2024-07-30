let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector(".reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let newGame=document.querySelector(".new-game");


let turnX=true;
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

  const resetgame=()=>{
    turnX=true;
     enabledbox();
     msgContainer.classList.add("hide");
  };

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box clicked");

        if(turnX===true){
            box.innerText="X";
            turnX=false;
        }else{
            box.innerText="0";
            turnX=true;  
        }
        box.disabled=true; 
        
        checkWinner();
      })
      
});

 const disabledbox=()=>{
    for(box of boxes){
        box.disabled=true;
      
    }
 }
 const enabledbox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
 };
const showWinner=(winner)=>{
    msg.innerHTML=`<h3> Congratulations, The winner is ${winner}<h3/>`
    msgContainer.classList.remove("hide");
    disabledbox();
  }

const checkWinner=()=>{
    for(let pattern of winPatterns){
        //console.log(pattern);
       let pos1= boxes[pattern[0]].innerText;
       let pos2= boxes[pattern[1]].innerText;
       let pos3= boxes[pattern[2]].innerText;


       if(pos1 !=""&&pos2 !="" && pos3 != ""){
          if (pos1==pos2 && pos2==pos3){
              showWinner(pos1); 
          }
          
       }
    }
   
};

newGame.addEventListener("click",resetgame);
resetButton.addEventListener("click",resetgame);
  