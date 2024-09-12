let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let player=document.querySelector("#player-name");
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
console.log("working")
let turn=true;
let count=1;
const checkWining=()=>{
    for(pattern of winPattern){
        if(boxes[pattern[0]].innerText!=""&&boxes[pattern[1]].innerText!=""&&boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText==boxes[pattern[1]].innerText&& boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
                if(boxes[pattern[0]].innerText=="O"){
                    alert("Congratulations: player 1 has win the match");
                }
                else{
                    alert("Congratulations: player 2 has win the match");
                }
            }
        }
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn){
            box.innerText="O";
            turn=false;
            player.innerText=" Player 2";
        }
        else{
            box.innerText="X";
            turn=true;
            player.innerText=" Player 1";
        }
        box.disabled=true;
        count++;
        checkWining();
    });
});


reset.addEventListener("click",(e)=>{
    location.reload();
});