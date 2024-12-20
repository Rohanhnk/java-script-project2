const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HUGH_SOCRES = 5;


finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () =>{
saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("!clicked save button!");
    e.preventDefault();

    const score = {
        score: finalScore.innerText,
        name: username.value,
    };
    // highScores.push(score);
    // highScores.sort((a, b) =>  b.score - a.score);
    // highScores.splice(5);
    highScores.push(score);

    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("/");
 
};