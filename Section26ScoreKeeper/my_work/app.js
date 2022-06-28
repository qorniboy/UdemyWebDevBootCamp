const p1AddBtn = document.querySelector("#p1AddBtn");
const p2AddBtn = document.querySelector("#p2AddBtn");
const resetBtn = document.querySelector("#resetScoreBtn")

let p1Score = document.querySelector("#p1ScoreDisplay");
let p2Score = document.querySelector("#p2ScoreDisplay");

p1AddBtn.addEventListener("click", function(e){
    e.preventDefault();
    const score = parseInt(p1Score.innerText) + 1;
    p1Score.innerText = score;
});

p2AddBtn.addEventListener("click", function(e){
    e.preventDefault();
    const score = parseInt(p2Score.innerText) + 1;
    p2Score.innerText = score;
});

resetBtn.addEventListener("click", function(e){
    e.preventDefault();
    p1Score.innerText = "0";
    p2Score.innerText = "0";
});
