// write js code here corresponding to matches.html
var matchDay = JSON.parse(localStorage.getItem("schedule")) || [];
// console.log(matchDay);

displayMatch(matchDay);
function handleVenuesort() {
  var selected = document.getElementById("filterVenue").value;
  var filtervenue = matchDay.filter(function (elem) {
    return elem.venue == selected;
  });

  displayMatch(filtervenue);
}
function displayMatch(matchDay) {
  document.querySelector("tbody").innerHTML = "";
  matchDay.map(function (elem) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elem.matchNum;
    var td2 = document.createElement("td");
    td2.innerText = elem.teamAid;
    var td3 = document.createElement("td");
    td3.innerText = elem.teamBid;
    var td4 = document.createElement("td");
    td4.innerText = elem.date;
    var td5 = document.createElement("td");
    td5.innerText = elem.venue;

    var td6 = document.createElement("td");
    td6.innerText = "Favourites";
    td6.addEventListener("click", function () {
      addFav(elem);
    });
    td6.style.color = "blue";
    td6.style.cursor = "pointer";

    tr.append(td1, td2, td3, td4, td5, td6);
    document.querySelector("tbody").append(tr);
  });
}
var favArr = JSON.parse(localStorage.getItem("favourites")) || [];
function addFav(elem) {
  favArr.push(elem);
  localStorage.setItem("favourites", JSON.stringify(favArr));
}
