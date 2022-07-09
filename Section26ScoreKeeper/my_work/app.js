const p1 = {
    score: 0,
    button: document.querySelector('#p1AddScoreButton'),
    display: document.querySelector('#p1ScoreDisplay')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2AddScoreButton'),
    display: document.querySelector('#p2ScoreDisplay')
}

const resetBtn = document.querySelector("#resetScoreBtn")
let winningScore = 5;
let isGameOver = false;
const winningScoreElem = document.querySelector("#winScore")

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

winningScoreElem.addEventListener('change',function(){
    winningScore = parseInt(this.value);
})

p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})

resetBtn.addEventListener("click", function(e){
    e.preventDefault();
    isGameOver = false;
    for (let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = "0";
        p.button.disabled = false;
    }
});
