// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", addMatch);
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
function addMatch() {
  event.preventDefault();

  var matchObj = {
    matchNum: document.getElementById("matchNum").value,
    teamAid: document.getElementById("teamA").value,
    teamBid: document.getElementById("teamB").value,
    date: document.getElementById("date").value,
    venue: document.getElementById("venue").value,
  };
  matchArr.push(matchObj);
  localStorage.setItem("schedule", JSON.stringify(matchArr));
}
